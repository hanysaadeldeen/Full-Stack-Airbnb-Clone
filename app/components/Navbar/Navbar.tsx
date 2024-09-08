"use client";
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import { UserMenue } from "./UserMenue";
const NavBar = () => {
  return (
    <header className="fixed w-full  ">
      <div className="border-b">
        <Container>
          <div className="flex py-2  justify-between items-center md:gap-2 gap-4">
            <Logo />
            <Search />

            <UserMenue />
          </div>
        </Container>
      </div>
    </header>
  );
};

export default NavBar;
