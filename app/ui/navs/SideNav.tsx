'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { AiTwotoneProject } from 'react-icons/ai';
import { IoPeopleSharp, IoReceiptSharp, IoMenu } from 'react-icons/io5';
import { IoMdSettings } from 'react-icons/io';
import { BiFoodMenu } from 'react-icons/bi';
import { FaTimes } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

export default function SideNav() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const getLinkClassName = (path: string) => {
    const baseClasses =
      'pl-1 py-1 flex items-center gap-1 rounded hover:bg-gray-100 hover:text-gray-600 cursor-pointer focus:bg-gray-100 focus:text-gray-600 focus:outline-none';
    if (!mounted) return baseClasses;
    return `${baseClasses} ${
      pathname === path ? 'bg-gray-100 text-gray-600' : ''
    }`;
  };

  return (
    <>
      {/* Mobile */}
      <div className='md:hidden absolute top-8 left-0 w-full bg-white border-b border-gray-400'>
        <div className='flex items-center justify-end p-2'>
          {isMobileOpen ? (
            <FaTimes
              className='text-2xl cursor-pointer'
              onClick={() => setIsMobileOpen(!isMobileOpen)}
            />
          ) : (
            <IoMenu
              className='text-2xl cursor-pointer'
              onClick={() => setIsMobileOpen(!isMobileOpen)}
            />
          )}
        </div>
        {isMobileOpen && (
          <div className='absolute top-11 left-0 w-full h-[50vh] bg-white border-b border-gray-400'>
            <ul className='flex flex-col'>
              <li className='mt-2'>
                <Link
                  href='/dashboard/projects'
                  className={getLinkClassName('/dashboard/projects')}
                >
                  <AiTwotoneProject className='text-lg mr-2' />
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href='/dashboard/team'
                  className={getLinkClassName('/dashboard/team')}
                >
                  <IoPeopleSharp className='text-lg mr-2' />
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href='/dashboard/billing'
                  className={getLinkClassName('/dashboard/billing')}
                >
                  <IoReceiptSharp className='text-lg mr-2' />
                  Billing
                </Link>
              </li>
              <li>
                <Link
                  href='/dashboard/settings'
                  className={getLinkClassName('/dashboard/settings')}
                >
                  <IoMdSettings className='text-lg mr-2' />
                  Settings
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
      {/* Desktop */}
      <div
        className={`hidden absolute top-0 left-0 h-full border-r border-gray-400 bg-white text-gray-500 text-sm px-1 md:flex flex-col justify-between ${
          isOpen ? 'min-w-48' : ''
        }`}
      >
        <ul className='flex flex-col mt-8'>
          <li className='mt-4'>
            <Link
              href='/dashboard/projects'
              className={getLinkClassName('/dashboard/projects')}
            >
              <AiTwotoneProject
                className={`text-lg ${isOpen ? 'mr-2' : 'mr-1 mt-[2px]'}`}
              />
              {isOpen ? 'Projects' : ''}
            </Link>
          </li>
          <li>
            <Link
              href='/dashboard/team'
              className={getLinkClassName('/dashboard/team')}
            >
              <IoPeopleSharp
                className={`text-lg ${isOpen ? 'mr-2' : 'mr-1 mt-[2px]'}`}
              />
              {isOpen ? 'Team' : ''}
            </Link>
          </li>
          <li>
            <Link
              href='/dashboard/billing'
              className={getLinkClassName('/dashboard/billing')}
            >
              <IoReceiptSharp
                className={`text-lg ${isOpen ? 'mr-2' : 'mr-1 mt-[2px]'}`}
              />
              {isOpen ? 'Billing' : ''}
            </Link>
          </li>
          <li>
            <Link
              href='/dashboard/settings'
              className={getLinkClassName('/dashboard/settings')}
            >
              <IoMdSettings
                className={`text-lg ${isOpen ? 'mr-2' : 'mr-1 mt-[2px]'}`}
              />
              {isOpen ? 'Settings' : ''}
            </Link>
          </li>
        </ul>
        <div
          className='pl-1 py-1 mb-4 flex items-center gap-1 rounded hover:bg-gray-100 hover:text-gray-600 cursor-pointer focus:bg-gray-100 focus:text-gray-600 focus:outline-none'
          onClick={() => setIsOpen(!isOpen)}
        >
          <BiFoodMenu
            className={`text-lg ${isOpen ? 'mr-2' : 'mr-1 mt-[2px]'}`}
          />
          {isOpen ? 'Close Sidebar' : ''}
        </div>
      </div>
    </>
  );
}
