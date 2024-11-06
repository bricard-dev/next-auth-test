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
    <header className="p-6 border-b">
      <h1 className="sr-only">Blog</h1>
      <nav className="flex items-center gap-4">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.title}
          </Link>
        ))}
      </nav>
    </header>
  );
}
