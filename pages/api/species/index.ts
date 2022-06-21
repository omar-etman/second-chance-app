import { Animal, PrismaClient, Species } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handle(req: { method: string }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: (Species & { animals: Animal[] })[]): void; new(): any } } }) {
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