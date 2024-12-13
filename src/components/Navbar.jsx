import { User2Icon } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <div className="max-w-full flex justify-between items-center p-2 text-center bg-white/75 border-2 shadow-xl">
      <div></div>
      <h2 className="text-3xl font-medium">Admin Dashboard</h2>
      <div className="flex flex-col justify-center items-center">
        <User2Icon size={34} className="border-2  rounded-full border-black/65" />
        <p className="uppercase text-xl font-medium">admin</p>
      </div>
    </div>
  );
};

export default Navbar;
