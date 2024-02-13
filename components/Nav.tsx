import { HiOutlineTrendingUp } from "react-icons/hi";
import { Button } from "./ui/button";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="flex justify-between mt-8 max-w-7xl w-full">
      <Link href={"/"} className="flex items-center">
        <HiOutlineTrendingUp className="text-blue-500 inline-block h-7 w-7" />
        <h1 className="text-xl font-bold">EXPLODING TOPICS</h1>
      </Link>

      <div className="flex items-center space-x-10 font-medium text-gray-500 text-[14px] ">
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
    </div>
  );
};

export default Nav;
