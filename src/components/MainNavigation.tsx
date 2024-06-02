import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/engeno.webp";

interface MainNavigationProps {}

const MainNavigation: React.FC<MainNavigationProps> = () => {
  const linkClasses = "text-xl text-white hover:text-gray-200 hover:underline";
  const linkClassesActive = "text-xl text-orange-200 underline";

  return (
    <header className="bg-blue-500 p-4 flex justify-between items-center">
      <div className="w-20">
        <img src={logo} alt="Logo" className="h-auto w-full" />
      </div>
      <nav className="flex-grow">
        <ul className="flex justify-center space-x-4">
          <li>
            <NavLink
              to="members"
              className={({ isActive }) =>
                isActive ? linkClassesActive : linkClasses
              }
            >
              Genossen
            </NavLink>
          </li>
          <li>
            <NavLink
              to="interested-persons"
              className={({ isActive }) =>
                isActive ? linkClassesActive : linkClasses
              }
            >
              Interessenten
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="w-20"></div>
    </header>
  );
};

export default MainNavigation;
