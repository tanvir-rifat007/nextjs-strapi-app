import Image from "next/image";
import Link from "next/link";

const HeroSection = ({ imgSrc, theme = "turquoise", headline }) => {
  return (
    <section className="hero">
      <div className="hero__background">
        <Image
          className="hero__home__img"
          src={imgSrc || "/assets/hero-home.png"}
          alt="Hero"
          height={500}
          width={500}
        />
      </div>
      <div className={`hero__headline hero__headline--${theme}`}>{headline}</div>
      <button className={`btn btn--medium btn--${theme}`}>
        <Link href="/events">Book Now</Link>
      </button>
      <Image
        className={`hero__logo hero__logo--${theme}`}
        src="/assets/logo.svg"
        alt="Logo"
        height={100}
        width={100}
      />
    </section>
  );
};

export default HeroSection;
