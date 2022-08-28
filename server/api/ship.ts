import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const data = await prisma.ship.findUnique({
    where: {
      id: 1,
    },
    select: {
      food: true,
      oxygen: true,
      energy: true,
    },
  })

  return data
})
