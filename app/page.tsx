import HeroSection from "@/components/HeroSection";
import InfoBlocks from "@/components/InfoBlocks";
import { getInfoForHomeFromStrapi } from "@/utils/strapi";

export default async function Home() {
  const res = await getInfoForHomeFromStrapi();

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
        <HeroSection headline={headline} />
        <InfoBlocks data={res.info_blocks} />
      </main>
    </div>
  );
}
