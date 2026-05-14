"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlink = ({ href, children, className }) => {
  const pathname = usePathname();
  const isActive = (href === pathname);
  return (
    <Link href={href}
      className={`${isActive ? "text-green-800 font-black" : ""} ${className}`}>
      {children}
    </Link>
  );
};

export default Navlink;