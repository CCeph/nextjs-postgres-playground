import Image from "next/image";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
 
async function getUsers() {
  const users = await prisma.user.findMany({
    orderBy: {id: "asc"}
  });
  return users
}

export default async function Home() {
  const users = await getUsers();
  console.log(users);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Users</h1>
      {users.map((user) => {
        return <p key={user.id}>{user.name}</p>
      })}
    </main>
  );
}
