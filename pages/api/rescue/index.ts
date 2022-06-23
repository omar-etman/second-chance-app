import { Animal, User, PrismaClient, Rescue } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

// Fetch all posts (in /pages/api/posts.ts)
const prisma = new PrismaClient()

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    if(req.method === 'POST'){
        const {animalId} = req.body
        const {userId} = req.body

        //validation
        //globalize try n catch 
        try{
            const user = await prisma.user.findFirst({
                where: {id: userId},
                include:{rescues: true}
            })
            const animal = await prisma.animal.findFirst({
                where:{id: +animalId}
            })
    
            const rescue = await prisma.rescue.create({
                data: {
                    userId: userId,
                    animalId:+animalId
                }
            })

            res.status(200).json(rescue)

        }catch{

            res.status(500)

        }

       

        

    }
}