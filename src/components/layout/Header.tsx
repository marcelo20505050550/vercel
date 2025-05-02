"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/image/logo.png"
              alt="BV BoaVentura"
              width={180}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-text hover:text-primary font-medium transition-colors">
              Início
            </Link>
            <Link href="/sobre" className="text-text hover:text-primary font-medium transition-colors">
              Sobre
            </Link>
            <Link href="/servicos" className="text-text hover:text-primary font-medium transition-colors">
              Serviços
            </Link>
            <Link href="/projetos" className="text-text hover:text-primary font-medium transition-colors">
              Projetos
            </Link>
            <Link href="/contato#curriculos" className="text-text hover:text-primary font-medium transition-colors">
              Trabalhe Conosco
            </Link>
            <Link href="/contato" className="text-text hover:text-primary font-medium transition-colors">
              Contato
            </Link>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Link href="/contato" className="btn-primary">
              Fale Conosco
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-text rounded-md focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-text hover:text-primary font-medium transition-colors">
                Início
              </Link>
              <Link href="/sobre" className="text-text hover:text-primary font-medium transition-colors">
                Sobre
              </Link>
              <Link href="/servicos" className="text-text hover:text-primary font-medium transition-colors">
                Serviços
              </Link>
              <Link href="/projetos" className="text-text hover:text-primary font-medium transition-colors">
                Projetos
              </Link>
              <Link href="/contato#curriculos" className="text-text hover:text-primary font-medium transition-colors">
                Trabalhe Conosco
              </Link>
              <Link href="/contato" className="text-text hover:text-primary font-medium transition-colors">
                Contato
              </Link>
              <Link href="/contato" className="btn-primary inline-block text-center">
                Fale Conosco
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 