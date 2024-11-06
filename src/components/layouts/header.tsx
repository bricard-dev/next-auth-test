import Link from 'next/link';

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
    <header className="min-h-16 px-6 flex items-center justify-between border-b">
      <h1 className="sr-only">Blog</h1>
      <nav className="flex items-center gap-4">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.title}
          </Link>
        ))}
      </nav>
      <div>
        <Link href="/signup">Sign up</Link>
      </div>
    </header>
  );
}
