import { PrismaClient, User } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { getUser } from "@supabase/supabase-auth-helpers/nextjs";
const prisma = new PrismaClient();

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse<User>
) {


  switch (req.method) {
    case "POST":
      createUser(req, res);
      break;
    case "GET":
      getUserId(req, res);
      break;
  }
}

async function createUser(req: NextApiRequest, res: NextApiResponse) {

  try {
    const { id, email, user_metadata } = req.body;
    
    console.log(user_metadata)
    if (!id) {
      res.status(500).json({ msg: "bad signup" });
    } else {
      const newUser: User = await prisma.user.create({
        data: {
          id: id,
          firstName: user_metadata.firstName,
          lastName: user_metadata.lastName,
          address: user_metadata.address,
          city:user_metadata.city,
          country:user_metadata.country,
          phone:user_metadata.phone,
          email,
          image: "",
          
       
        },
      });
      res.status(200).json({ msg: "user created", user: newUser });
    }
  } catch (error) {
    console.log(error);
  }
}

async function getUserId(req: NextApiRequest, res: NextApiResponse) {
  const { user } = await getUser({ req, res });
  console.log(user);
  if (user) {
    // Signed in
    try {
      const userId = user?.id;
      const fullUser = await prisma.user.findUnique({
        where: { id: userId },
      });
      if (!fullUser) {
        return res.status(400).json({ msg: "no user" });
      }
      return res.status(200).json({ msg: "user info", fullUser });
    } catch (err: any) {
      console.log(err);
      res.status(400).json({ msg: "something went wrong", err });
    }
  } else {
    // Not Signed in
    console.log("User Redirected");

    return res.writeHead(403, {
      Location: "/signup",
    });
  }
}
