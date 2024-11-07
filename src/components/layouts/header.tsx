import Link from 'next/link';
import { Button } from '../ui/button';
import { ModeToggle } from '../ui/mode-toggle';

const navItems = [
  {
    href: '/',
    title: 'Home',
  },
  {
    href: '/about',
    title: 'About',
  },
  {
    href: '/contact',
    title: 'Contact',
  },
];

export default function Header() {
  return (
    <header className="h-16 px-6 flex shrink-0 items-center justify-between border-b text-sm">
      <h1 className="sr-only">Blog</h1>
      <nav className="flex items-center gap-4">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.title}
          </Link>
        ))}
      </nav>
      <div className="flex items-center gap-2">
        <ModeToggle />
        <Button variant="outline">
          <Link href="/login">Login</Link>
        </Button>
        <Button variant="default">
          <Link href="/signup">Sign up</Link>
        </Button>
      </div>
    </header>
  );
}
