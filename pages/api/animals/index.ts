import { Animal, Image, PrismaClient } from '@prisma/client'

// Fetch all posts (in /pages/api/posts.ts)
const prisma = new PrismaClient()

export default async function handle(req: { method: string; body: { name: any; images: any; species: any; breed: any; dateOfBirth: any; story: any; traits: any; requirements: any; gender: any } }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: (Animal & { images: Image[] })[]): void; new(): any } } }) {
  if (req.method === 'GET') {

    const animals = await prisma.animal.findMany({
      include: { images: true, rescue:true },
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
                animalId: animal.id,
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
