'use client';
import { useEffect, useState } from 'react';
import { NAV_LINKS } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currScrollPos = window.scrollY;

      // make navbar visible when scrolling up or at the top
      setVisible(prevScrollPos > currScrollPos || currScrollPos < 10);

      setPrevScrollPos(currScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const handleMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);

    // prevent scrolling when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 bg-white/50 transition-all duration-300 ease-in-out z-50
      ${visible ? 'translate-y-0' : '-translate-y-full'}
      ${isMobileMenuOpen ? 'translate-y-0' : ''}`}
    >
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
            >
              {link.label}
            </Link>
          ))}
        </ul>
        <div className="lg:flexCenter hidden p-10">
          {/* <Button
            type="button"
            title="Book A Demo"
            icon="/user.svg"
            variant="btn_dark_green"
          /> */}
        </div>
        <div className="lg:hidden p-4 z-50">
          <button
            onClick={handleMenuClick}
            className="relative w-8 h-8 flex items-center justify-center"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <div className="relative w-8 h-8">
              <Image
                src="/menu.svg"
                alt="menu"
                width={32}
                height={32}
                className={`absolute top-0 left-0 transition-all duration-300 ease-in-out cursor-pointer
                  ${
                    isMobileMenuOpen
                      ? 'opacity-0 rotate-90'
                      : 'opacity-100 rotate-0'
                  }`}
              />
              <Image
                src="/x.svg"
                alt="close"
                width={32}
                height={32}
                className={`absolute top-0 left-0 transition-all duration-300 ease-in-out cursor-pointer
                  ${
                    isMobileMenuOpen
                      ? 'opacity-100 rotate-0'
                      : 'opacity-0 -rotate-90'
                  }`}
              />
            </div>
          </button>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white lg:hidden transition-all duration-300 ease-in-out
          ${
            isMobileMenuOpen
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-[-100%] pointer-events-none'
          }`}
      >
        <div className="flex flex-col justify-center items-center h-full pt-20">
          {/* Company Logo in Mobile Menu */}
          <div className="mb-12">
            <Image
              src="/kipepeo-logo.svg"
              alt="Kipepeo_Logo"
              width={100}
              height={66.67}
              className="transition-all duration-300 ease-in-out"
            />
          </div>
          <ul className="space-y-8">
            {NAV_LINKS.map((link) => (
              <li key={link.key} className="text-center">
                <a
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    document.body.style.overflow = 'unset';
                  }}
                  href={link.href}
                  className="block p-4 text-2xl font-medium text-gray-50 hover:text-gray-900 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
