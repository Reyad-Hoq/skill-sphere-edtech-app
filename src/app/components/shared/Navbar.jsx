import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from "@/assets/logo3.png";
const Navbar = () => {
  const links = <>
    <li><Link href="/">Home</Link></li>
    <li><Link href="/courses">Courses</Link></li>
    <li><Link href="/profile">My profile</Link></li>
  </>;
  return (
    <div className=" bg-base-100 shadow-sm">
      <div className="navbar w-9/12 mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost font-semibold text-2xl">
            <span className='text-green-900'>Skill</span>
            <span className='text-orange-600'>Sphere</span>
            {/* <Image src={logo} alt="SkillSphere Logo" width={250} height={200} /> */}
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end gap-3">
          <Link href="/login" className="btn">Login</Link>
          <Link href="/register" className="btn">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;