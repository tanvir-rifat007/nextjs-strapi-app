import HeroSection from "@/components/HeroSection";
import InfoBlocks from "@/components/InfoBlocks";

export default function ExperiencePage() {
  const data = {
    headline: "the experience.",
    text: (
      <p className="copy">
        At Sam’s Surfcamp, we invite you to embark on an unforgettable surfing
        adventure. Nestled in the heart of [Location] our surf camp offers an
        exhilarating experience for beginners, intermediate surfers, and
        seasoned wave riders alike. Dive into the world of surfing with our
        expert instructors who have years of experience and a deep passion for
        the sport. Whether you're a first-time surfer looking to catch your
        first wave or a seasoned pro seeking to enhance your skills, our
        dedicated team is here to guide you every step of the way. Immerse
        yourself in the natural beauty of our surf camp's surroundings. Picture
        yourself waking up to the sound of crashing waves and feeling the warm
        sand beneath your feet. With pristine beaches and a vibrant coastal
        atmosphere, [Location] sets the perfect stage for your surf adventure.
      </p>
    ),
    button: <button className="btn btn--orange">Learn More</button>,
  };

  const headline = (
    <>
      <h1>Discover</h1>
      <h1>the world</h1>
      <h1>with us</h1>
    </>
  );

  return (
    <div>
      <main>
        <HeroSection
          headline={headline}
          theme="orange"
          imgSrc={"/assets/hero-experience.png"}
        />
        <InfoBlocks data={data} />
        <InfoBlocks data={{ ...data, reversed: true }} />
        <InfoBlocks data={data} />
      </main>
    </div>
  );
}
