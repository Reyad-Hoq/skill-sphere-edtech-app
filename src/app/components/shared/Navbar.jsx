'use client';
import Image from 'next/image';
import userAvatar from "@/assets/user.png";
import Link from 'next/link';
import React, { use } from 'react';
import logo from "@/assets/logo3.png";
import Navlink from './Navlink';
import { useSession, signOut } from '@/lib/auth-client';
import { toast } from 'react-toastify';
const Navbar = () => {
  const { data, isPending } = useSession();
  const signOutHandler = () => {
    signOut({
      fetchOptions: {
        cache: "no-store",
        onSuccess: () => {
          toast.success("Logged out successfully");
          setTimeout(() => {
            window.location.href = "/";
          }, 1500);
        }
      },
    });
  };
  const links = <>
    <li><Navlink href="/">Home</Navlink></li>
    <li><Navlink href="/courses">Courses</Navlink></li>
    <li><Navlink href="/profile">My profile</Navlink></li>
  </>;
  return (
    <div className=" bg-base-100 shadow-sm">
      <div className="navbar w-full md:w-9/12 mx-auto ">
        <div className="navbar-start flex flex-wrap-reverse gap-2">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {links}
              <li><Link href="/register">Register</Link></li>
              {
                data?.user ?
                  <li><button onClick={signOutHandler}>Logout</button></li> :
                  <li><Link href="/login">Login</Link></li>
              }
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
        {isPending ?
          <div className='navbar-end'>loading <span className="loading loading-dots loading-lg mx-3"></span>
          </div> : data?.user ?
            <div className="navbar-end">
              <span className="mr-3 hidden md:flex text-zinc-500">Hello, {data?.user?.name}</span>
              <Image
                src={data?.user?.image || userAvatar}
                alt="User avatar"
                width={40}
                height={40}
              />
              <button onClick={signOutHandler} className="btn ml-3 hidden md:flex btn-error btn-outline">Log out</button>
            </div> : <div className="navbar-end gap-3">
              <Link href="/login" className="btn border-2 border-orange-600 text-orange-600">Login</Link>
              <Link href="/register" className="btn bg-green-900 text-white border-2 border-green-600 hidden md:flex">Register</Link>
            </div>
        }
      </div>
    </div>
  );
};

export default Navbar;              