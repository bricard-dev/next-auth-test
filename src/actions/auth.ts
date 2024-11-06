'use server';

import { createUser } from '@/lib/data';
import { FormState, SignupFormSchema } from '@/lib/definitions';
import bcrypt from 'bcryptjs';
import { redirect } from 'next/navigation';

export async function signup(
  state: FormState,
  formData: FormData
): Promise<FormState> {
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
  const user = await createUser(name, email, hashedPassword);

  if (!user) {
    return {
      message: 'An error occurred while creating your account.',
    };
  }

  // Create a session

  // Redirect user
  redirect('/');
}
