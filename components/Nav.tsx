"use client";

import { HiOutlineTrendingUp } from "react-icons/hi";
import { Button } from "./ui/button";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex justify-between pt-4 md:mt-8 md:max-w-7xl w-full max-md:px-4 max-md:w-screen">
      <Link href={"/"} className="flex items-center bg-[#f5faff] z-50">
        <HiOutlineTrendingUp className="text-blue-500 inline-block h-7 w-7" />
        <h1 className="text-xl font-bold">EXPLODING TOPICS</h1>
      </Link>

      <div className="md:flex items-center space-x-10 font-medium text-gray-500 text-[14px] hidden">
        <Link href={"/"} className="hover:text-black">
          About
        </Link>
        <Link href={"/"} className="hover:text-black">
          Newsletter
        </Link>
        <Link href={"/"} className="hover:text-black">
          Blog
        </Link>
        <Button
          className="
        bg-gradient-to-r from-blue-500 to-blue-600 px-3 py-0 h-6 rounded text-[10px]
        "
        >
          PRO
        </Button>
      </div>
      <div className="flex items-center gap-2 md:hidden z-50 bg-[#f5faff]">
        {!isOpen ? (
          <GiHamburgerMenu
            onClick={() => setIsOpen(true)}
            className=" text-2xl"
          />
        ) : (
          <IoMdClose onClick={() => setIsOpen(false)} className=" text-2xl" />
        )}

        <Button
          className="
        bg-gradient-to-r from-blue-500 to-blue-600 px-3 py-0 h-6 rounded text-[10px]
        "
        >
          PRO
        </Button>
      </div>
      <div
        className={`${
          isOpen ? "absolute" : "hidden"
        } md:hidden top-10 w-full z-50 left-0`}
      >
        <div className="flex flex-col px-4 mt-6 gap-2 divide-y divide-gray-500 z-50 bg-[#f5faff]">
          <Link
            href={"/"}
            className="hover:text-black w-full flex justify-between items-center text-[16px] font-medium p-2 text-gray-500"
          >
            <span>About</span>
            <FaAngleRight className="inline-block" />
          </Link>
          <Link
            href={"/"}
            className="hover:text-black w-full flex justify-between items-center text-[16px] font-medium p-2 text-gray-500"
          >
            <span>Newsletter</span>
            <FaAngleRight className="inline-block" />
          </Link>
          <Link
            href={"/"}
            className="hover:text-black w-full flex justify-between items-center text-[16px] p-2 font-medium text-gray-500"
          >
            <span>Blog</span>
            <FaAngleRight className="inline-block" />
          </Link>
        </div>
      </div>

      <div className="absolute top-0 left-0 z-30 w-full p-10 bg-[#f5faff]"></div>
      {
        // Overlay
        isOpen && (
          <div
            className="
        h-full w-full fixed top-0 left-0 bg-black bg-opacity-50 z-10
      "
          ></div>
        )
      }
    </div>
  );
};

export default Nav;
