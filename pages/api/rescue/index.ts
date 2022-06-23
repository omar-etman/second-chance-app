import { Animal, User, PrismaClient, Rescue } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

// Fetch all posts (in /pages/api/posts.ts)
const prisma = new PrismaClient()

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    if(req.method === 'POST'){
        const {animalId} = req.query
        const {userId} = req.body
        const user = prisma.user.findFirst({
            where: {id: userId}
        })
        const animal = prisma.animal.findFirst({
            where:{id: +animalId}
        })
        const rescue = prisma.rescue.create({
            data: {
                userId: user.id,
                animalId:animal.id
            }
        })

    }
}