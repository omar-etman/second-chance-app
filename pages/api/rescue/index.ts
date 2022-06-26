import { Animal, User, PrismaClient, Rescue } from '@prisma/client'
import { getUser } from '@supabase/supabase-auth-helpers/nextjs';
import { NextApiRequest, NextApiResponse } from 'next'

// Fetch all posts (in /pages/api/posts.ts)
const prisma = new PrismaClient()

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    if(req.method === 'POST'){
        // const { user } = await getUser({ req, res });

        const {animalId, userId } = req.body

        //validation
        //globalize try n catch 
        try{
            const loggedInUser = await prisma.user.findFirst({
                where: {id: userId},
            })
            const animal = await prisma.animal.findFirst({
                where:{id: +animalId}
            })
            if (loggedInUser && animal) {

                const rescue = await prisma.rescue.create({
                    data: {
                        userId: userId ,
                        animalId:+animalId
                }
            })

                return res.status(200).json(rescue)
            }


        }catch{

            res.status(500)

        }

       

        

    }
}