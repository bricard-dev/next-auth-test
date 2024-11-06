import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        'w-full h-10 px-3 py-2 flex items-center border rounded-md border-gray-500 bg-transparent text-sm focus-visible:outline-blue-500 focus-visible:outline-none',
        className
      )}
      {...props}
    />
  );
}
