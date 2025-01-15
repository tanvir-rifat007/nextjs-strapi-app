import Image from "next/image";
import Link from "next/link";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
];

const Footer = () => {
  return (
    <footer className="footer">
      <Image
        className="footer__logo"
        src="/assets/logo.svg"
        alt="Logo"
        width={100}
        height={100}
      />

      <nav className="footer__nav">
        {LINKS.map((link) => (
          <Link key={link.href} href={link.href}>
            <h5>{link.label}</h5>
          </Link>
        ))}
      </nav>
    </footer>
  );
};

export default Footer;
