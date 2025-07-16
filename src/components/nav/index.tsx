"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Nav() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    // Header muncul jika scroll ke atas atau berada di paling atas halaman (currentScrollPos < 10)
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  const navLinks = [
    { href: "/work", label: "Work" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/", label: "Ideas" }, // Main Ideas page
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ];

  // Check if current route is the ideas page (either / or /[slug])
  const isIdeasRoute = pathname === "/" || pathname.match(/^\/\d+$/);

  const getLinkClass = (href: string) => {
    const isActive = href === "/" ? isIdeasRoute : pathname === href;
    return `text-lg font-medium transition-colors duration-200 ${
      isActive ? "text-orange-500 font-semibold" : "text-gray-800 hover:text-orange-500"
    }`;
  };

  return (
    <header
      className={`shadow-md fixed w-full top-0 z-20 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      } ${
        // Terapkan transparansi hanya ketika header terlihat (visible)
        visible ? "bg-white/90 backdrop-blur-sm" : "bg-white" 
        // Menggunakan bg-white/90 untuk opacity 90% dan backdrop-blur-sm untuk efek buram
        // Anda bisa memilih salah satu atau keduanya.
        // Jika Anda ingin lebih transparan, ganti 'bg-white/90' dengan 'bg-white/80' atau 'bg-white/70'.
        // Atau jika hanya ingin transparansi tanpa blur, cukup 'bg-white/90'.
      }`}
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" passHref>
            <Image
              src="/favicon-logo.png"
              alt="Suitmedia Logo"
              width={55}
              height={35}
              priority // High priority for logo
              className="cursor-pointer"
            />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} passHref>
              <span className={getLinkClass(link.href)}>{link.label}</span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 py-4 bg-white shadow-lg">
          {/* Untuk overlay menu mobile, Anda juga bisa menambahkan transparansi jika diinginkan */}
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} passHref>
              <span
                className={getLinkClass(link.href)}
                onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
              >
                {link.label}
              </span>
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}