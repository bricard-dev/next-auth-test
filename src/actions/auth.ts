'use server';

import {
  FormState,
  LoginFormSchema,
  SignupFormSchema,
} from '@/lib/definitions';
import { createSession, deleteSession } from '@/lib/sessions';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { redirect } from 'next/navigation';

const prisma = new PrismaClient();

export async function signup(
  state: FormState,
  formData: FormData
): Promise<FormState> {
  try {
    // Validate form fields
    const validatedFields = SignupFormSchema.safeParse({
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
    });

    // If any form fields are invalid, return early
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }

    // Prepare data to be stored in the database
    const { name, email, password } = validatedFields.data;

    // Hash the user's password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save the user in the database
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
    if (!user) {
      return {
        message: 'An error occurred while creating your account.',
      };
    }

    // Create a session
    createSession(user.id);

    // Redirect user
    redirect('/');
  } catch {
    return {
      message: 'An error occurred while creating your account.',
    };
  }
}

export async function login(
  state: FormState,
  formData: FormData
): Promise<FormState> {
  try {
    // Validate form fields
    const validatedFields = LoginFormSchema.safeParse({
      email: formData.get('email'),
      password: formData.get('password'),
    });
    const errorMessage = { message: 'Invalid login credentials.' };

    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }

    // Find the user in the database
    const { email, password } = validatedFields.data;

    // Check if the user exists
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    // If the user does not exist, return an error message
    if (!user) {
      return errorMessage;
    }

    // Check if the password is correct
    const passwordMatch = await bcrypt.compare(password, user.password);

    // If the password is incorrect, return an error message
    if (!passwordMatch) {
      return errorMessage;
    }

    // Create a session
    await createSession(user.id);

    // Redirect user
    redirect('/');
  } catch {
    return {
      message: 'An error occurred while logging in.',
    };
  }
}

export async function logout() {
  await deleteSession();
  redirect('/');
}
