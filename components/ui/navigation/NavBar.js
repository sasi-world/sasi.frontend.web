import React from "react";
import Image from "next-images";
import Logo from "./svg/Logo";
import HeadingOne from "../Typography/HeadingOne";

const NavBar = () => {
  return (
    <header className="border-top bg-transparent flex justify-center flex-wrap p-6">
      <div className="flex items-center flex-no-shrink text">
        <Logo className=" mx-2" />
        <h1 className=" text-2xl text-white shadow-sm text-center font-medium font-display lg:text-3xl s:text-xl flex justify-center">
          SASI
        </h1>
      </div>
      {/* <span>
        <a
          className="flex flex-row"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Fullstack-Serverless-GraphQL/fullstack-serverless-graphql-docs"
        >
          <img src={Github} alt="github icon" />
        </a>
      </span> */}
    </header>
  );
};

export default NavBar;
