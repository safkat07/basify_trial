/* eslint-disable react/prop-types */

import { Menu } from "lucide-react";
import logo from "../assets/logo-PDk1GN3P.png";
import { createContext, useContext, useState } from "react";

const SidebarContext = createContext();

export const Sidebar = ({ children }) => {
  const [expeneded, setExpended] = useState(false);
  return (
    <div
      className={`h-screen fixed left-0 bottom-0 ${
        expeneded ? "w-64  " : "w-[4.5rem]"
      }`}
    >
      <nav className="h-full flex flex-col  bg-white border-r  shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src={logo}
            alt="Logo Icon"
            className={`overflow-hidden transition-all ${
              expeneded ? "w-32" : "w-0"
            }`}
          />
          <button
            onClick={() => setExpended((curr) => !curr)}
            className="p-3 rounded-lg bg-gray-50  hover:bg-gray-100"
          >
            <Menu />
          </button>
        </div>

        <SidebarContext.Provider value={{ expeneded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>
      </nav>
    </div>
  );
};

export function SideBarItem({ icon, text, active }) {
  const { expeneded } = useContext(SidebarContext);
  return (
    <li
      className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
        active
          ? "bg-gradient-to-tr from bg-indigo-200 to-indigo-100 text-indigo-800"
          : "hover:bg-indigo-50 text-gray-600"
      }`}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expeneded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      {!expeneded && (
        <div
          className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
        >
          {text}
        </div>
      )}
    </li>
  );
}
