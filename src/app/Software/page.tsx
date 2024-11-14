import NavBar from "@/components/common/NavBar";
import FooterSection from "@/components/sections/FooterSection";
import SoftwareSection from "@/components/sections/SoftwareSection";
import SoftwareCardSection from "@/components/sections/SoftwareCardSection";
import HeroSection from "@/components/sections/HeroSection";
import NewsletterSection from "@/components/sections/NewsletterSection";
import ServiceSection from "@/components/sections/ServiceSection";
import TeamSection from "@/components/sections/TeamSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import VideoPlayerSection from "@/components/sections/VideoPlayerSection";

export default function Sofware() {
  return (
    <main>
      <NavBar />
      <div className="mt-24 md:32 lg:mt-8 px-4  md:px-[9rem]">
        <SoftwareSection />
        <SoftwareCardSection />
        {/* <HeroSection /> */}
        {/* <ServiceSection /> */}
        {/* <VideoPlayerSection /> */}
        {/* <TestimonialSection /> */}
        {/* <TeamSection /> */}
        {/* <NewsletterSection /> */}
        <FooterSection />
      </div>
    </main>
  );
}
