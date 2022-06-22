import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'


const prisma = new PrismaClient()


export default async function handle(req: NextApiRequest, res: NextApiResponse)  {
  if (req.method === 'GET') {

    const { animalId } = req.query

    const animal = await prisma.animal.findFirst({
      where: { id: +animalId },
      include: { images: true, species: true },
    })

    if (!animal) {
      res.status(400).json({ msg: 'that animal is not ' })
    }


    res.status(200).json(animal)
  }
}