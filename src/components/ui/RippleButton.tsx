"use client";

import { motion } from "framer-motion";
import { useState, MouseEvent } from "react";

interface RippleButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
}

interface Ripple {
  x: number;
  y: number;
  id: number;
}

export default function RippleButton({
  children,
  onClick,
  href,
  className = "",
  variant = "primary",
}: RippleButtonProps) {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const handleClick = (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newRipple: Ripple = {
      x,
      y,
      id: Date.now(),
    };

    setRipples([...ripples, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);

    if (onClick) onClick();
  };

  const baseClasses =
    "relative overflow-hidden inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg";

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white",
    secondary:
      "bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white",
    outline:
      "border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-50",
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        onClick={handleClick}
        className={combinedClasses}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            className="absolute bg-white/30 rounded-full animate-ripple"
            style={{
              left: ripple.x,
              top: ripple.y,
              width: 0,
              height: 0,
            }}
          />
        ))}
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={handleClick}
      className={combinedClasses}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute bg-white/30 rounded-full animate-ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: 0,
            height: 0,
          }}
        />
      ))}
      {children}
    </motion.button>
  );
}
