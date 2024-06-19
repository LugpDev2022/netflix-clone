'use client';

import Image from 'next/image';
import { signOut } from 'next-auth/react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/src/components/ui/dropdown-menu';

interface Props {
  dict: any;
}

const AvatarDropdown: React.FC<Props> = ({ dict }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Image src='/avatar.png' alt='Avatar' width={26} height={26} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{dict.app.navbar.avatar.account}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => {
            signOut();
          }}
        >
          {dict.app.navbar.avatar.logOut}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AvatarDropdown;
