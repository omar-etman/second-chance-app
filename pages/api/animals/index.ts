import { Animal, Image, PrismaClient, Species  } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

// Fetch all posts (in /pages/api/posts.ts)
const prisma = new PrismaClient()

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {

    const animals = await prisma.animal.findMany({
      include: { images: true, species: true ,rescue:true },
    })

    if (animals.length == 0) {
      res.status(400).json({ msg: 'no animals' })
    }
    res.status(200).json(animals)
  } else if (req.method === 'POST') {

    try {
      const { name, images, species, breed, dateOfBirth, story, traits, requirements, gender} = req.body
      const animal = await prisma.animal.create({
        data: {
          name,
          species,
          breed,
          gender,
          dateOfBirth,
          story,
          traits,
          requirements 
        },  
    })
    for (let i=0; i<images.length; i++) {
        const image = await prisma.image.create({
            data: {
                animalId: +animal.id,
                image: images[i]
            }
        })
        
    }
    
      res.status(200).json({ msg: 'pet added', animal })
    } catch (err) {
      res.status(400).json({ msg: 'something went wrong', details: err })
    }
  }
}
