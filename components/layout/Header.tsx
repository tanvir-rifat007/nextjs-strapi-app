"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/about", label: "About" },
];

const Header = () => {
  const path = usePathname();
  return (
    <header
      className={`header ${path === "/experience" ? "header--light" : ""}`}
    >
      <Image
        className="header__logo"
        src="/assets/logo.svg"
        alt="Logo"
        width={100}
        height={100}
      />
      <nav className="header__nav">
        {LINKS.map((link) => (
          <Link key={link.href} href={link.href}>
            <h5>{link.label}</h5>
          </Link>
        ))}
      </nav>
      <Link href="/book">
        <button className="btn btn--black btn--small">Book Now</button>
      </Link>
    </header>
  );
};

export default Header;
