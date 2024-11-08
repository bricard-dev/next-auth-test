import { verifySession } from '@/lib/sessions';
import Link from 'next/link';
import HeaderActions from '../header-actions';
import Navigation from '../navigation';

export default async function Header() {
  const { isAuth } = await verifySession();

  return (
    <header className="h-16 px-6 flex shrink-0 items-center justify-between border-b text-sm">
      <div>
        <h1 className="sr-only">Blog</h1>
        <Link href="/" className="text-base font-bold">
          Blog
        </Link>
      </div>
      <Navigation isAuth={isAuth} />
      <HeaderActions isAuth={isAuth} />
    </header>
  );
}
