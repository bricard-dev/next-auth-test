import { PrismaClient } from '@prisma/client';
import { cache } from 'react';

const prisma = new PrismaClient();

export const createUser = cache(
  async (name: string, email: string, password: string) => {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });
    return user;
  }
);

export const getUserByEmail = cache(async (email: string) => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  return user;
});
