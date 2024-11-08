import Link from 'next/link';
import Navigation from '../navigation';
import { ModeToggle } from '../ui/mode-toggle';

export default function Header() {
  return (
    <header className="h-16 px-6 flex shrink-0 items-center justify-between border-b text-sm">
      <div>
        <h1 className="sr-only">Blog</h1>
        <Link href="/" className="text-base font-bold">
          Blog
        </Link>
      </div>
      <Navigation />
      <div className="flex items-center gap-2">
        <ModeToggle />
      </div>
    </header>
  );
}
