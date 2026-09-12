import Hero from "@/components/hero/Hero";
import WhatIBuild from "@/components/hero/WhatIBuild";
import HowIThink from "@/components/hero/HowIThink";
import OmnixStory from "@/components/story/OmnixStory";
import VertexStory from "@/components/story/VertexStory";
import FeaturedWork from "@/components/projects/FeaturedWork";
import Capabilities from "@/components/layout/Capabilities";
import AboutPreview from "@/components/layout/AboutPreview";
import ContactCTA from "@/components/layout/ContactCTA";

import { getLeetCodeStats } from "@/lib/leetcode";

export default async function Home() {
  const leetCodeCount = await getLeetCodeStats("TheChirag__X");

  return (
    <>
      <Hero />
      <WhatIBuild />
      <HowIThink />
      <OmnixStory />
      <VertexStory />
      <FeaturedWork />
      <Capabilities leetCodeCount={leetCodeCount} />
      <AboutPreview />
      <ContactCTA />
    </>
  );
}
