import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const app = express()
app.use(cors())
app.use(express.json())

app.get('/api/health', (req, res) => res.json({ status: 'ok' }))

app.post('/api/auth/register', async (req, res) => {
  const { email, password, role, name } = req.body
  if (!email || !password || !role) return res.status(400).json({ error: 'missing fields' })
  // NOTE: password hashing omitted in this minimal scaffold
  const user = await prisma.user.create({ data: { email, password, role, name } })
  res.json({ id: user.id, email: user.email, role: user.role })
})

app.post('/api/stores/:id/items', async (req, res) => {
  const { id } = req.params
  const { title, description, quantity, unit, expiryAt, pickupWindowEnd } = req.body
  const item = await prisma.leftoverItem.create({
    data: {
      storeId: id,
      title,
      description,
      quantity: Number(quantity) || 1,
      unit: unit || 'pcs',
      expiryAt: new Date(expiryAt),
      pickupWindowEnd: new Date(pickupWindowEnd)
    }
  })
  res.json(item)
})

app.get('/api/items/nearby', async (req, res) => {
  const items = await prisma.leftoverItem.findMany({ where: { status: 'AVAILABLE' }, take: 50 })
  res.json(items)
})

const port = process.env.PORT || 4000
app.listen(port, () => console.log('API listening on', port))
