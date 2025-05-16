"use client";

import { useEffect } from "react";
import { Button } from "../ui/button";

import { gsap } from "gsap";

const Header = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(
      [".header-title", ".list-item"],
      {
        opacity: "100%",
        color: "black",
        ease: "sine.inOut",
        stagger: 0.2,
        y: -10,
      },
      "<"
    );
  }, []);

  return (
    <header className="flex justify-center items-center w-full h-[70px] border-b-[1px] border-b-[#F5F5F5]">
      <div className="flex justify-between items-center max-w-[1800px] w-full">
        <span className="header-title text-transparent font-medium text-lg mt-[1rem]">
          VAULT
        </span>

        <div className="flex justify-end items-center gap-[0.5rem]">
          <ul className="flex itesms-center gap-[1.5rem] mr-[3rem]">
            <li className="list-item list-item-features cursor-pointer font-medium text-md mt-[1rem] text-transparent">
              Features
            </li>
            <li className="list-item list-item-pricing cursor-pointer font-medium text-md mt-[1rem] text-transparent">
              Pricing
            </li>
            <li className="list-item list-item-help cursor-pointer font-medium text-md mt-[1rem] text-transparent">
              Help
            </li>
            <li className="list-item list-item-login cursor-pointer  font-medium text-md mt-[1rem] text-transparent">
              Login
            </li>
          </ul>
          <Button
            variant="outline"
            className="button-register rounded-xl bg-[#F8F8F8]"
          >
            Register
          </Button>
        </div>
      </div>
    </header>
  );
};

export { Header };
