"use client";
import Image from "next/image";
import Link from "next/link";
// import { useRouter } from "next/navigation";
import React from "react";

const Logo = () => {
  //   const router = useRouter();
  //   const BackToHomePage = () => {
  //     router.push("/test");
  //   };
  return (
    <Link href="/">
      <Image
        // onClick={BackToHomePage}
        src={
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1200px-Airbnb_Logo_B%C3%A9lo.svg.png"
        }
        className="max-md:hidden"
        alt="Aribnb-Logo"
        width={"100"}
        height={"100"}
      />
    </Link>
  );
};

export default Logo;
