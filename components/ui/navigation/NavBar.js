import React from "react";
import Image from "next-images";
import Logo from "../../../assets/sasi-logo.svg";
import HeadingOne from "../Typography/HeadingOne";

const NavBar = () => {
  return (
    <header className="border-top bg-transparent flex justify-center flex-wrap p-6">
      <div className="flex items-center flex-no-shrink text">
        <Image src={Logo} alt="Sasi logo" />
        <HeadingOne className="  text-white  text-center">SASI</HeadingOne>
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
