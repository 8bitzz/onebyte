import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="fixed w-full z-40 top-0 bg-white px-20 py-8 font-extralight tracking-widest">
      <div className="h-full flex justify-between items-end py-3">
        <Link href="/">
          <div className="flex flex-row h-full justify-center items-end cursor-pointer">
            <img src="/logo.png" className="h-10 mr-1"></img>
            <span className="text-2xl cursor-pointer font-semibold lowercase">Onebyte</span>
          </div>
        </Link>
        <div className="flex h-full justify-end items-center cursor-pointer uppercase">
          <Link href="/blogs">
            <div className="ml-10">blogs</div>
          </Link>
          <Link href="/projects">
            <div className="ml-10">projects</div>
          </Link>
          <Link href="/about">
            <div className="ml-10">about</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
