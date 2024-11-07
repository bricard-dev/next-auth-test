import { cn } from '@/lib/utils';
import * as React from 'react';

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        'w-full h-10 px-3 py-2 flex items-center border rounded-md  bg-transparent text-sm focus-visible:outline-blue-500 focus-visible:outline-none',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = 'Input';

export { Input };
