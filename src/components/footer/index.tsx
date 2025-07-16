import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col items-center text-center px-4">
        <Link href="/" passHref>
            <Image
              src="/logo2.png"
              alt="Suitmedia Logo"
              width={180}
              height={42}
              className="mb-4 cursor-pointer"
            />
        </Link>
        <p className="text-gray-400 mb-6 text-sm">Front End Developer Test Intern</p>
        <div className="flex space-x-6 mb-6">
          <a href="https://www.instagram.com/suitmedia/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
            <i className="fab fa-instagram fa-2x"></i>
          </a>
          <a href="https://twitter.com/suitmedia" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
            <i className="fab fa-twitter fa-2x"></i>
          </a>
          <a href="https://www.facebook.com/Suitmedia" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a href="https://www.linkedin.com/company/suitmedia/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
        </div>
        <hr className="border-gray-700 w-full mb-6" />
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Suitmedia. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}