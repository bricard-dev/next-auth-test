'use client';

import { login } from '@/actions/auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PasswordInput } from '@/components/ui/password-input';
import { ChangeEvent, useActionState, useState } from 'react';

export default function LoginForm() {
  const [state, action, pending] = useActionState(login, undefined);
  const [email, setEmail] = useState('');

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  return (
    <form action={action}>
      <div className="flex flex-col gap-4 text-sm">
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <Input
            id="email"
            name="email"
            placeholder="johndoe@example.com"
            value={email}
            onChange={handleChange}
          />
          {state?.errors?.email && (
            <p className="text-error">{state.errors.email}</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="name">Password</label>
          <PasswordInput />
          {state?.errors?.email && (
            <p className="text-error">{state.errors.password}</p>
          )}
        </div>

        {state?.message && (
          <p className="text-sm text-red-500">{state.message}</p>
        )}

        <Button type="submit" disabled={pending}>
          Login
        </Button>
      </div>
    </form>
  );
}
