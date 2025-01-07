'use client';
import { useState } from 'react';
import { NAV_LINKS } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="relative">
      <div className="flex justify-between items-center">
        <Link href="/">
          <Image
            src="/kipepeo-logo.svg"
            alt="Kipepeo_Logo"
            width={150}
            height={100}
          />
        </Link>
        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
              rel={link.key == 'how' ? 'noopener noreferrer' : ''}
              target={link.key == 'how' ? '_blank' : ''}
            >
              {link.label}
            </Link>
          ))}
        </ul>
        <div className="lg:flexCenter hidden p-10">
          <Button
            type="button"
            title="Get Started"
            icon="/user.svg"
            variant="btn_dark_green"
          />
        </div>
        <div className="lg:hidden p-4">
          <Image
            src="menu.svg"
            alt="menu"
            width={32}
            height={32}
            className="inline-block cursor-pointer"
            onClick={handleMenuClick}
          />
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="w-full bg-white shadow-md rounded-xl lg:hidden">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.key}>
                <a
                  onClick={() => setIsMobileMenuOpen(false)}
                  href={link.href}
                  className="block p-4 regular-16 text-gray-50"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
