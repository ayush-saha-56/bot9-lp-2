'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import {useRouter} from "next/navigation";

// Assume these components are defined elsewhere
import Logo from '../common/logo';
import Button from '../common/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const links = [
    { name: 'Voice', href: '/voice' },
    { name: 'Chat', href: '/chat' },
    { name: 'AI Agent', href: '/ai-agent' },
    { name: 'Pricing', href: '/pricing' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (href) => {
    setIsMobileMenuOpen(false);
    router.push(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-40 h-[60px] md:h-[5.55vw] z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-white border-b border-gray-200' : 'bg-sky-50'
      }`}
    >
      <Link href="/" className="text-black">
        <Logo/>
      </Link>

      <div className="hidden md:flex flex-grow justify-center ml-[10.416vw]">
        <NavLinks isScrolled={isScrolled} links={links} className="hidden md:flex" />
      </div>

      <div className="hidden md:flex items-center ml-[1.66vw] w-[12.638vw] h-[2.22vw]">
        <div className="w-[10.4vw] h-[3.3vw] flex items-center justify-center">
          <Button
            variant="text"
            size="custom"
            className="flex items-center justify-center !p-0"
          >
            <span className="whitespace-nowrap font-manrope text-[1.11vw] font-[500] leading-[1.66vw]" onClick={() => window.open("https://app.bot9.ai/login")}>
              Login
            </span>
          </Button>
        </div>
        <div className="w-[10.4vw] h-[3.3vw] flex items-center justify-center ml-[1.66vw]">
          <Button
            variant="outline"
            size="custom"
            className="w-[8.05vw] h-[2.22vw] flex items-center justify-center !p-0"
          >
            <span className="whitespace-nowrap font-manrope text-[1.11vw] font-[500] leading-[1.66vw]" onClick={() => window.open("https://calendly.com/bot9/30min")}>
              Book a Demo
            </span>
          </Button>
        </div>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMobileMenu} aria-label="Toggle Menu">
          {isMobileMenuOpen ? (
            <X size={24} className="text-black" />
          ) : (
            <Menu size={24} className="text-black" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="absolute top-[50px] md:top-[5.55vw] left-0 w-full bg-white shadow-lg z-40 md:hidden">
          <ul className="flex flex-col space-y-2 p-4">
            {links.map((link) => (
              <li key={link.name}>
                <button
                  onClick={() => handleLinkClick(link.href)}
                  className={`text-[3.5vw] leading-[5vw] w-full text-left py-2 ${
                    pathname === link.href
                      ? 'text-[#5755FF]'
                      : isScrolled
                      ? 'text-gray-800'
                      : 'text-[#667185]'
                  } hover:text-[#5755FF]`}
                >
                  {link.name}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => window.open("https://app.bot9.ai/login")}
                className="text-[3.5vw] leading-[5vw] w-full text-left py-2 text-gray-800 hover:text-[#5755FF]"
              >
                Login
              </button>
            </li>
            <li>
              <button
                onClick={() => window.open("https://calendly.com/bot9/30min")}
                className="text-[3.5vw] leading-[5vw] w-full text-left py-2 text-gray-800 hover:text-[#5755FF]"
              >
                Book a Demo
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

const NavLinks = ({ isScrolled, links, className }) => {
  const pathname = usePathname();

  return (
    <nav className={className}>
      <ul className="flex space-x-[2.77vw]">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className={`text-[1.25vw] leading-[1.94vw] ${
                pathname === link.href
                  ? 'text-[#5755FF]'
                  : isScrolled
                  ? 'text-gray-800'
                  : 'text-[#667185]'
              } hover:text-[#5755FF]`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;