import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="fixed w-full z-40 top-0 bg-white px-20 py-10 font-extralight tracking-widest uppercase">
      <div className="h-full flex justify-between items-center py-3">
        <Link href="/">
          <div className="flex h-full justify-center items-center cursor-pointer">
            <span className="text-xl cursor-pointer">Onebyte</span>
          </div>
        </Link>
        <div className="flex h-full justify-end items-center cursor-pointer">
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
