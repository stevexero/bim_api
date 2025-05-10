'use client';

import { useParams } from 'next/navigation';
import { AiTwotoneProject } from 'react-icons/ai';
import { IoPeopleSharp, IoReceiptSharp } from 'react-icons/io5';
import { IoMdSettings } from 'react-icons/io';
import { MdDashboard } from 'react-icons/md';
import ListItemLink from '../links/ListItemLink';
import { useNavStore } from './navStore';

export default function DashboardNav() {
  const { tenant } = useParams();
  const { isOpen } = useNavStore();

  return (
    <ul className='flex flex-col mt-0 md:mt-8 ml-8 md:ml-0'>
      <ListItemLink
        href={`/dashboard/${tenant}`}
        icon={
          <MdDashboard className={`text-lg ${isOpen ? 'mr-2' : 'mr-1 mt-4'}`} />
        }
        text='Dashboard'
        className={isOpen ? 'mt-4' : ''}
      />
      <ListItemLink
        href={`/dashboard/${tenant}/projects`}
        icon={
          <AiTwotoneProject
            className={`text-lg ${isOpen ? 'mr-2' : 'mr-1 mt-[2px]'}`}
          />
        }
        text='Projects'
      />
      <ListItemLink
        href={`/dashboard/${tenant}/team`}
        icon={
          <IoPeopleSharp
            className={`text-lg ${isOpen ? 'mr-2' : 'mr-1 mt-[2px]'}`}
          />
        }
        text='Team'
      />
      <ListItemLink
        href={`/dashboard/${tenant}/billing`}
        icon={
          <IoReceiptSharp
            className={`text-lg ${isOpen ? 'mr-2' : 'mr-1 mt-[2px]'}`}
          />
        }
        text='Billing'
      />
      <ListItemLink
        href={`/dashboard/${tenant}/settings`}
        icon={
          <IoMdSettings
            className={`text-lg ${isOpen ? 'mr-2' : 'mr-1 mt-[2px]'}`}
          />
        }
        text='Settings'
      />
    </ul>
  );
}
