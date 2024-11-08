'use client';

import { logout } from '@/actions/auth';
import { LogOut } from 'lucide-react';
import { Button } from './ui/button';
import { ModeToggle } from './ui/mode-toggle';

interface HeaderActionsProps {
  isAuth: boolean;
}

export default function HeaderActions({ isAuth }: HeaderActionsProps) {
  return (
    <div className="flex items-center">
      <ModeToggle />
      {isAuth && (
        <Button
          variant="ghost"
          size="icon"
          onClick={async () => await logout()}
        >
          <LogOut />
        </Button>
      )}
    </div>
  );
}
