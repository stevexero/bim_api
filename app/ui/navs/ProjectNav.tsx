'use client';

import { usePathname } from 'next/navigation';
import ListItemLink from '../links/ListItemLink';
import { useNavStore } from './navStore';
import { IoHomeSharp } from 'react-icons/io5';
import { FaKey } from 'react-icons/fa6';

export default function ProjectNav() {
  const pathname = usePathname();
  const { isOpen } = useNavStore();

  const baseProjectPath = pathname.split('/').slice(0, 5).join('/');
  console.log(baseProjectPath);

  return (
    <ul className='flex flex-col mt-0 md:mt-8 ml-8 md:ml-0'>
      <ListItemLink
        href={baseProjectPath}
        icon={
          <IoHomeSharp className={`text-lg ${isOpen ? 'mr-2' : 'mr-1 mt-4'}`} />
        }
        text='Project Overview'
        className={isOpen ? 'mt-4' : ''}
      />
      <ListItemLink
        href={`${baseProjectPath}/keys`}
        icon={
          <FaKey className={`text-lg ${isOpen ? 'mr-2' : 'mr-1 mt-[2px]'}`} />
        }
        text='API Keys'
      />
    </ul>
  );
}
