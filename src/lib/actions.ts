'use server'

import { sql } from './prisma'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { jwtVerify } from 'jose'

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || 'supersafesecret123')

async function verifyAdminSession() {
  const cookieStore = await cookies()
  const token = cookieStore.get('admin_token')?.value

  if (!token) {
    throw new Error('Unauthorized: No token found')
  }

  try {
    const { payload } = await jwtVerify(token, JWT_SECRET)
    if (payload.role !== 'admin') {
      throw new Error('Forbidden: Insufficient permissions')
    }
  } catch (error) {
    throw new Error('Unauthorized: Invalid or expired token')
  }
}

function validateInput(data: Record<string, any>, fields: string[]) {
  for (const field of fields) {
    const value = data[field]
    if (value === undefined || value === null || (typeof value === 'string' && value.trim() === '')) {
      throw new Error(`Validation Error: ${field} is required`)
    }
  }
}

// --- Types ---
export interface Category {
  id: string;
  name: string;
  createdAt?: Date;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  slug: string;
  categoryName: string;
  rating: number;
  stock: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string | null;
  rating: number;
  createdAt?: Date;
}

export interface ProductInput {
  name: string;
  description: string;
  price: string | number;
  image: string;
  categoryName: string;
  rating?: string | number;
  stock?: string | number;
}

export interface TestimonialInput {
  name: string;
  role: string;
  content: string;
  image: string | null;
  rating?: string | number;
}

// --- Helpers ---
function generateSlug(name: string) {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// --- Categories ---
export async function getCategories(): Promise<Category[]> {
  const result = await sql`SELECT * FROM "Category" ORDER BY name ASC`
  return result as Category[]
}

export async function createCategory(name: string) {
  await verifyAdminSession()
  if (!name || name.trim() === '') throw new Error('Category name is required')

  const normalizedName = name.toUpperCase()
  const id = `cl${Math.random().toString(36).substring(2, 11)}`
  
  await sql`
    INSERT INTO "Category" (id, name, "createdAt")
    VALUES (${id}, ${normalizedName}, NOW())
  `
  
  revalidatePath('/admin/categories')
  return { id, name: normalizedName }
}

export async function updateCategory(id: string, name: string) {
  await verifyAdminSession()
  if (!id || !name || name.trim() === '') throw new Error('ID and Category name are required')

  const normalizedName = name.toUpperCase()
  const [oldCat] = await sql`SELECT name FROM "Category" WHERE id = ${id} LIMIT 1` as Category[]
  
  if (oldCat) {
    await sql`UPDATE "Category" SET name = ${normalizedName} WHERE id = ${id}`
    await sql`UPDATE "Product" SET "categoryName" = ${normalizedName} WHERE "categoryName" = ${oldCat.name}`
  }
  
  revalidatePath('/admin/categories')
  revalidatePath('/admin/products')
}

export async function deleteCategory(id: string) {
  await verifyAdminSession()
  await sql`DELETE FROM "Category" WHERE id = ${id}`
  revalidatePath('/admin/categories')
}

// --- Products ---
export async function getProductById(id: string): Promise<Product | undefined> {
  const [product] = await sql`SELECT * FROM "Product" WHERE id = ${id} LIMIT 1` as Product[]
  return product
}

export async function getProducts(): Promise<Product[]> {
  return await sql`SELECT * FROM "Product" ORDER BY "createdAt" DESC` as Product[]
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  const [product] = await sql`SELECT * FROM "Product" WHERE slug = ${slug} LIMIT 1` as Product[]
  return product
}

export async function createProduct(data: ProductInput) {
  await verifyAdminSession()
  validateInput(data, ['name', 'description', 'price', 'categoryName', 'image'])

  const id = `cl${Math.random().toString(36).substring(2, 11)}`
  const slug = generateSlug(data.name || '')
  const price = typeof data.price === 'string' ? parseFloat(data.price) : (data.price || 0)
  const rating = typeof data.rating === 'string' ? parseFloat(data.rating) : (data.rating || 5.0)
  const stock = typeof data.stock === 'string' ? parseInt(data.stock) : (data.stock || 0)

  await sql`
    INSERT INTO "Product" (id, name, description, price, image, slug, "categoryName", rating, stock, "createdAt", "updatedAt")
    VALUES (${id}, ${data.name}, ${data.description}, ${price}, ${data.image}, ${slug}, ${data.categoryName}, ${rating}, ${stock}, NOW(), NOW())
  `

  revalidatePath('/admin/products')
  revalidatePath('/products')
  return { id, slug, ...data }
}

export async function updateProduct(id: string, data: ProductInput) {
  await verifyAdminSession()
  validateInput(data, ['name', 'description', 'price', 'categoryName', 'image'])

  const price = typeof data.price === 'string' ? parseFloat(data.price) : (data.price || 0)
  const rating = typeof data.rating === 'string' ? parseFloat(data.rating) : (data.rating || 5.0)
  const stock = typeof data.stock === 'string' ? parseInt(data.stock) : (data.stock || 0)
  const slug = generateSlug(data.name || '')

  await sql`
    UPDATE "Product"
    SET 
      name = ${data.name},
      description = ${data.description},
      price = ${price},
      image = ${data.image},
      slug = ${slug},
      "categoryName" = ${data.categoryName},
      rating = ${rating},
      stock = ${stock},
      "updatedAt" = NOW()
    WHERE id = ${id}
  `

  revalidatePath('/admin/products')
  revalidatePath(`/products/${slug}`)
  revalidatePath('/products')
  return { id, slug, ...data }
}

export async function deleteProduct(id: string) {
  await verifyAdminSession()
  await sql`DELETE FROM "Product" WHERE id = ${id}`
  revalidatePath('/admin/products')
  revalidatePath('/products')
}

// --- Testimonials ---
export async function getTestimonials(): Promise<Testimonial[]> {
  return await sql`SELECT * FROM "Testimonial" ORDER BY "createdAt" DESC` as Testimonial[]
}

export async function createTestimonial(data: TestimonialInput) {
  await verifyAdminSession()
  validateInput(data, ['name', 'role', 'content'])

  const id = `cl${Math.random().toString(36).substring(2, 11)}`
  const rating = typeof data.rating === 'string' ? parseInt(data.rating) : (data.rating || 5)

  await sql`
    INSERT INTO "Testimonial" (id, name, role, content, image, rating, "createdAt")
    VALUES (${id}, ${data.name}, ${data.role}, ${data.content}, ${data.image}, ${rating}, NOW())
  `

  revalidatePath('/admin/testimonials')
  revalidatePath('/')
  return { id, ...data }
}

export async function updateTestimonial(id: string, data: TestimonialInput) {
  await verifyAdminSession()
  validateInput(data, ['name', 'role', 'content'])

  const rating = typeof data.rating === 'string' ? parseInt(data.rating) : (data.rating || 5)

  await sql`
    UPDATE "Testimonial"
    SET 
      name = ${data.name},
      role = ${data.role},
      content = ${data.content},
      image = ${data.image},
      rating = ${rating}
    WHERE id = ${id}
  `

  revalidatePath('/admin/testimonials')
  revalidatePath('/')
  return { id, ...data }
}

export async function deleteTestimonial(id: string) {
  await verifyAdminSession()
  await sql`DELETE FROM "Testimonial" WHERE id = ${id}`
  revalidatePath('/admin/testimonials')
  revalidatePath('/')
}

