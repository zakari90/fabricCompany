"use client"
import { MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import LangSwitcher from "./lang-switcher";
import LogoComponent from "./logoComponents";
import { NavBarProps } from "./navWithSheet";
import { Button } from "./ui/button";

export default function Navbar({ locale, navLinks }: NavBarProps) {
  const [toggle, setToggle] = useState(false);
  const domaine = process.env.NEXT_PUBLIC_DOMAINE;

  const showNav = () => {
    setToggle(!toggle);
  };

  // start mobile first plus facile
  return (
    <nav className="bg-background">
      
      <div className="container mx-auto flex justify-between items-center">
      <LogoComponent/>
        <ul
          className={`${
            toggle ? "flex" : " hidden"
          }   h-auto flex-col justify-center items-center w-auto md:w-auto  md:flex md:flex-row`}
        >
          {navLinks.map((link, index) => {
            return (
                <Button 
                variant="ghost"
                key={index}
                
                >

                <Link
                  
                  href={`${domaine}${locale}/#${link[1]}`}
                  onClick={showNav}
                >
                 {link[0]}
                </Link>
                </Button>

            );
          })}
          <LangSwitcher />
        </ul>
        <button
          className="flex justify-end md:hidden ring-1 rounded"
          onClick={showNav}
        >
          {toggle ?  <XIcon className="m-1"/> : <MenuIcon className="m-1"/>}
        </button>
      </div>
    </nav>
  );
}
