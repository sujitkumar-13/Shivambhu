'use server'

import prisma, { sql } from './prisma'
import { revalidatePath } from 'next/cache'

// --- Categories ---
export async function getCategories() {
  const result = await sql`SELECT * FROM "Category" ORDER BY name ASC`
  return result
}

export async function createCategory(name: string) {
  const normalizedName = name.toUpperCase()
  const id = `cl${Math.random().toString(36).substring(2, 11)}` // Simple CUID-like ID
  
  await sql`
    INSERT INTO "Category" (id, name, "createdAt")
    VALUES (${id}, ${normalizedName}, NOW())
  `
  
  revalidatePath('/admin/categories')
  return { id, name: normalizedName }
}

export async function updateCategory(id: string, name: string) {
  const normalizedName = name.toUpperCase()
  
  // Get old name first to update products
  const [oldCat]: any = await sql`SELECT name FROM "Category" WHERE id = ${id} LIMIT 1`
  
  if (oldCat) {
    // Update products first to maintain reference if needed (or do it in a transaction)
    // Actually, in Postgres, if it's a FK on name, we should update both.
    // The most reliable way is to update Category and then Products.
    await sql`UPDATE "Category" SET name = ${normalizedName} WHERE id = ${id}`
    await sql`UPDATE "Product" SET "categoryName" = ${normalizedName} WHERE "categoryName" = ${oldCat.name}`
  }
  
  revalidatePath('/admin/categories')
  revalidatePath('/admin/products')
}

export async function deleteCategory(id: string) {
  // First delete products in category or the DB might complain? 
  // Actually, let's just delete the category.
  await sql`DELETE FROM "Category" WHERE id = ${id}`
  revalidatePath('/admin/categories')
}

export async function getProductById(id: string) {
  const [product] = await sql`SELECT * FROM "Product" WHERE id = ${id} LIMIT 1`
  return product
}

// --- Products ---
export async function getProducts() {
  return await sql`SELECT * FROM "Product" ORDER BY "createdAt" DESC`
}

export async function createProduct(data: any) {
  const id = `cl${Math.random().toString(36).substring(2, 11)}`
  const price = parseFloat(data.price)
  const rating = parseFloat(data.rating || '5.0')
  const stock = parseInt(data.stock || '0')

  await sql`
    INSERT INTO "Product" (id, name, description, price, image, "categoryName", rating, stock, "createdAt", "updatedAt")
    VALUES (${id}, ${data.name}, ${data.description}, ${price}, ${data.image}, ${data.categoryName}, ${rating}, ${stock}, NOW(), NOW())
  `

  revalidatePath('/admin/products')
  revalidatePath('/products')
  return { id, ...data }
}

export async function updateProduct(id: string, data: any) {
  const price = parseFloat(data.price)
  const rating = parseFloat(data.rating || '5.0')
  const stock = parseInt(data.stock || '0')

  await sql`
    UPDATE "Product"
    SET 
      name = ${data.name},
      description = ${data.description},
      price = ${price},
      image = ${data.image},
      "categoryName" = ${data.categoryName},
      rating = ${rating},
      stock = ${stock},
      "updatedAt" = NOW()
    WHERE id = ${id}
  `

  revalidatePath('/admin/products')
  revalidatePath(`/products/${id}`)
  revalidatePath('/products')
  return { id, ...data }
}

export async function deleteProduct(id: string) {
  await sql`DELETE FROM "Product" WHERE id = ${id}`
  revalidatePath('/admin/products')
  revalidatePath('/products')
}

// --- Testimonials ---
export async function getTestimonials() {
  return await sql`SELECT * FROM "Testimonial" ORDER BY "createdAt" DESC`
}

export async function createTestimonial(data: any) {
  const id = `cl${Math.random().toString(36).substring(2, 11)}`
  const rating = parseInt(data.rating || '5')

  await sql`
    INSERT INTO "Testimonial" (id, name, role, content, image, rating, "createdAt")
    VALUES (${id}, ${data.name}, ${data.role}, ${data.content}, ${data.image}, ${rating}, NOW())
  `

  revalidatePath('/admin/testimonials')
  revalidatePath('/')
  return { id, ...data }
}

export async function updateTestimonial(id: string, data: any) {
  const rating = parseInt(data.rating || '5')

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
  await sql`DELETE FROM "Testimonial" WHERE id = ${id}`
  revalidatePath('/admin/testimonials')
  revalidatePath('/')
}
