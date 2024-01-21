"use client"

import Link from "next/link";
import React, { useState } from "react";
import logos from "../../public/image/logos.png";
import Image from "next/image";
import { IoMenu } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";

function Nav() {

  const [open,  setOpen] = useState("")

  return (
    <div className="max-w-5xl mx-auto p-8 ">
      {/* main */}
      <div className="flex justify-between items-center ">
        {/* logo */}
        <div>
          <h1 className="text-md text-orange-800 font-extrabold">
            Top-Star<span className="text-white">  Tech</span>
          </h1>
        </div>
        <div className="md:hidden z-50 cursor-pointer"
        onClick={() =>  setOpen(!open)}>

          <IoMenu className = " text-xl font-bold text-white"/>
        </div>
        {/* desktop */}
        <div className="space-x-5 hidden md:flex">
          <Link
            href="/"
            className="text-white font-DM text-md font-semibold hover:text-orange-800 transition-all duration-500"
          >
            Home
          </Link>
          <Link
            href="/Servic"
            className="text-white font-DM text-md font-semibold hover:text-orange-800 transition-all duration-500"
          >
            Services
          </Link>
          <Link
            href="/Projec"
            className="text-white font-DM text-md font-semibold hover:text-orange-800 transition-all duration-500"
          >
            Projects
          </Link>
          <Link
            href="/About"
            className="text-white font-DM text-md font-semibold hover:text-orange-800 transition-all duration-500"
          >
            About
          </Link>
          <Link
            href="/Contect"
            className="text-white font-DM text-md font-semibold hover:text-orange-800 transition-all duration-500"
          >
            Contect
          </Link>
        </div>
        {/* mobile */}
        <div
          className={`space-x-5 md:hidden
         flex flex-col absolute top-0 right-0 justify-center items-center w-40 min-h-screen
         bg-black  bg-opacity-35 space-y-10  ${open ? "flex" : "hidden"}`}
        >
          <Link
            href="/"
            className="text-white font-DM text-md font-semibold hover:text-orange-800 transition-all duration-500"
          >
            Home
          </Link>
          <Link
            href="/Services"
            className="text-white font-DM text-md font-semibold hover:text-orange-800 transition-all duration-500"
          >
            Services
          </Link>
          <Link
            href="/Projec"
            className="text-white font-DM text-md font-semibold hover:text-orange-800 transition-all duration-500"
          >
            Projects
          </Link>
          <Link
            href="/About"
            className="text-white font-DM text-md font-semibold hover:text-orange-800 transition-all duration-500"
          >
            About
          </Link>
          <Link
            href="/Contect"
            className="text-white font-DM text-md font-semibold hover:text-orange-800 transition-all duration-500"
          >
            Contect
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
