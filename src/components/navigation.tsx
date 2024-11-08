'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  {
    href: '/about',
    title: 'About',
  },
  {
    href: '/contact',
    title: 'Contact',
  },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-4">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            'text-muted-foreground transition-colors hover:text-foreground',
            {
              'font-medium text-foreground': pathname === item.href,
            }
          )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
