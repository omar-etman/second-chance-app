import { Animal, PrismaClient, Species } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {

    const species = await prisma.species.findMany({
      include: { animals: true },
    })

    if (species.length == 0) {
        const errorMessage = 'problem ... no species'
      res.status(400).json({ errorMessage })
    }
    res.status(200).json(species)
  } 
}

