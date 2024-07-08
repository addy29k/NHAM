import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "C:/Users/vedan/NHAM/public/logo.webp";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <Image src={logo} alt="Logo" width={50} height={50} />
      </div>
      <nav>
        <Link href="/" className="mr-4">
          Home
        </Link>
        <Link href="/assets" className="mr-4">
          Assets
        </Link>
        <Link href="/maintenance" className="mr-4">
          Maintenance
        </Link>
        <Link href="/reports" className="mr-4">
          Reports
        </Link>
        <Link href="/settings">Settings</Link>
      </nav>
      <div>User Profile</div>
    </header>
  );
};

export default Header;
