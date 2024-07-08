import React from "react";
import Link from "next/link";

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-200 h-full p-4">
      <nav>
        <Link href="/" className="block py-2">
          Dashboard Overview
        </Link>
        <Link href="/assets" className="block py-2">
          Asset Management
        </Link>
        <Link href="/maintenance" className="block py-2">
          Maintenance Management
        </Link>
        <Link href="/reports" className="block py-2">
          Reports
        </Link>
        <Link href="/settings" className="block py-2">
          Settings
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
