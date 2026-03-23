import dotenv from 'dotenv'
import { PrismaClient } from '@prisma/client'
import { PrismaNeon } from '@prisma/adapter-neon'
import { Pool, neonConfig } from '@neondatabase/serverless'
import ws from 'ws'
import bcrypt from 'bcryptjs'

dotenv.config()
neonConfig.webSocketConstructor = ws

const pool = new Pool({ connectionString: process.env.DATABASE_URL })
const adapter = new PrismaNeon(pool as any)
const prisma = new PrismaClient({ adapter })

async function main() {
  const client = await pool.connect()
  try {
    console.log('Seeding Admin User...')
    const adminEmail = 'admin@gmail.com'
    const hashedPassword = await bcrypt.hash('admin@123', 10)
    await client.query('INSERT INTO "Admin" (id, email, password, "updatedAt") VALUES ($1, $2, $3, NOW()) ON CONFLICT (email) DO UPDATE SET password = $3', [crypto.randomUUID(), adminEmail, hashedPassword])

    console.log('Seeding finished successfully!')
  } catch (err) {
    console.error('Seeding failed:', err)
  } finally {
    client.release()
    await pool.end()
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
