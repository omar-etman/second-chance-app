import {PrismaClient} from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import moment from 'moment'
// Fetch all posts (in /pages/api/posts.ts)
const prisma = new PrismaClient()

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {

    const animals = await prisma.animal.findMany({
      include: { images: true, species: true, Rescue: true },
    })

    if (animals.length == 0) {
      res.status(400).json({ msg: 'no animals' })
    }
    res.status(200).json(animals)
  } else if (req.method === 'POST') {

    try {
      const { name, photos, species, breed, dateOfBirth, story, traits, requirements, gender} = req.body
      const petSpecies = await prisma.species.findFirst({
        where: {name: species}
      })
      const speciesId = +petSpecies!.id
      const birthDate = moment(dateOfBirth, 'YYYY-MM-DD hh:mm:ss').toDate()
      console.log({name, photos, speciesId, breed, dateOfBirth, story, traits, requirements, gender,birthDate})
      const animal = await prisma.animal.create({
        data: {
          name,
          speciesId,
          breed,
          gender,
          dateOfBirth:birthDate,
          story,
          traits,
          requirements 
        },  
    })
    for (let i=0; i<photos.length; i++) {
        const image = await prisma.image.create({
            data: {
                animalId: +animal.id,
                image: photos[i]
            }
        })
        
    }
    
      res.status(200).json({ msg: 'pet added', animal })
    } catch (err) {
      console.log({err})
      res.status(400).json({ msg: 'something went wrong', details: err })
    }
  }

  
}
