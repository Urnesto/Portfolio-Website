import React from "react";

import { git, linkedin } from "../assets";
const Footer = () => {
  return (
    <footer className="min-h-[100px] bg-slate-50 mt-10 w-full px-5 md:px-20 flex items-center justify-between">
      <h4 className="text-sm sm:text-base text-erieBlack">
        &copy;2023 This page is created by Ernest
      </h4>
      <div className="flex justify-between gap-4 ">
        <div className="bg-primary text-white p-2 rounded-full ">
          <a href="https://github.com/Urnesto" target="blank">
            <img src={git} width={25} height={25} alt="git" />
          </a>
        </div>
        <div className="bg-primary text-white p-2 rounded-full">
          <a
            href="https://www.linkedin.com/in/ernest-rimkievicius-0785a521a/"
            target="blank"
          >
            <img src={linkedin} width={25} height={25} alt="LinkedIn" />
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
