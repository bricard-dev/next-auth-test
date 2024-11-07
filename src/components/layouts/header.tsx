import Link from 'next/link';
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
      <div className="flex items-center">
        <ModeToggle />
        <Link
          href="/signup"
          className="px-3 py-2.5 border rounded-md hover:border-foreground hover:bg-foreground hover:text-background transition-colors"
        >
          Sign up
        </Link>
      </div>
    </header>
  );
}
