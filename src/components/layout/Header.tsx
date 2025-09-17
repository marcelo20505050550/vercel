"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

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
            <Link href="/produtos" className="text-text hover:text-primary font-medium transition-colors">
              Produtos
            </Link>
            <Link href="/contato" className="text-text hover:text-primary font-medium transition-colors">
              Contato
            </Link>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Link 
              href="/contato" 
              className="group inline-flex items-center justify-center bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-6 py-3 rounded-full font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg"
            >
              Fale Conosco
              <motion.svg 
                className="w-4 h-4 ml-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.959 8.959 0 01-4.906-1.476L3 21l2.476-5.094A8.959 8.959 0 013 12c0-4.418 3.582-8 8-8s8 3.582 8 8z" />
              </motion.svg>
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
              <Link href="/produtos" className="text-text hover:text-primary font-medium transition-colors">
                Produtos
              </Link>
              <Link href="/contato" className="text-text hover:text-primary font-medium transition-colors">
                Contato
              </Link>
              <Link 
                href="/contato" 
                className="inline-flex items-center justify-center bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-6 py-3 rounded-full font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg mt-2"
              >
                Fale Conosco
                <motion.svg 
                  className="w-4 h-4 ml-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.959 8.959 0 01-4.906-1.476L3 21l2.476-5.094A8.959 8.959 0 013 12c0-4.418 3.582-8 8-8s8 3.582 8 8z" />
                </motion.svg>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 