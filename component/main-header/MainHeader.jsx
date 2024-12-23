"use client";
import Link from "next/link";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./MainHeaderBackground";
import NavLink from "./NavLink";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header id="main-header" className={classes.header}>
        <div id="logo">
          <Link href="/" className={classes.logo}>
            <Image src={logoImg} alt="logo" priority />
            NextLevel Food
          </Link>
        </div>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href='/meals'>Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href='/community'>Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
