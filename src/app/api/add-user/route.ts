import { PrismaClient } from '@prisma/client';
 
const prisma = new PrismaClient();
 
export default async function prismaExample() {
  const newUser = await prisma.user.create({
    data: {
        id: 2,
      name: 'Elliott',
      email: 'testing2',
      image: "Works",
    },
  });
 
  const users = await prisma.user.findMany();
}

prismaExample();