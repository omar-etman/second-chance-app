import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'


const prisma = new PrismaClient()


export default async function handle(req: NextApiRequest, res: NextApiResponse)  {
  if (req.method === 'GET') {

    const { spId } = req.body

    const animals = await prisma.animal.findMany({
      where: { speciesId: +spId},
      include: {images: true }

        })
        if (!animals) {
          res.status(400).json({ msg: `we don't have animals of this species` })
        }
    
    
        res.status(200).json(animals)
    }

  } 