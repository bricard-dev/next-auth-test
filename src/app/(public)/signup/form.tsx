'use client';

import { signup } from '@/actions/auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PasswordInput } from '@/components/ui/password-input';
import { ChangeEvent, useActionState, useState } from 'react';

export default function SignupForm() {
  const [state, action, pending] = useActionState(signup, undefined);
  const [fields, setFields] = useState({ name: '', email: '' });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setFields({ ...fields, [e.target.name]: e.target.value });
  }

  return (
    <form action={action}>
      <div className="flex flex-col gap-4 text-sm">
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Name</label>
          <Input
            id="name"
            name="name"
            placeholder="John Doe"
            value={fields.name}
            onChange={handleChange}
          />
        </div>
        {state?.errors?.name && (
          <p className="text-error">{state.errors.name}</p>
        )}

        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="johndoe@example.com"
            value={fields.email}
            onChange={handleChange}
          />
        </div>
        {state?.errors?.email && (
          <p className="text-error">{state.errors.email}</p>
        )}

        <div className="flex flex-col gap-2">
          <label htmlFor="name">Password</label>
          <PasswordInput />
        </div>
        {state?.errors?.password && (
          <div className="text-error space-y-2">
            <p>Password must:</p>
            <ul className="list-disc list-inside">
              {state.errors.password.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          </div>
        )}

        <Button type="submit" disabled={pending}>
          Sign up
        </Button>
      </div>
    </form>
  );
}
