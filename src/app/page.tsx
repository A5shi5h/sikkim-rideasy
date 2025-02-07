
import FeaturedCourses from "@/components/FeaturedDestinations";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import HeroSection from "@/components/HeroSection";
import { TabsDemo } from "@/components/TabsDemo";
import MusicSchoolTestimonials from "@/components/TestimonialCards";
import WhyChooseUs from "@/components/WhyChooseUs";
import TagLine from "@/components/TagLine";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <TabsDemo />
      <FeaturedCourses />
      <HeroSection />
      <WhyChooseUs />
      <MusicSchoolTestimonials />
      <Gallery />
      <TagLine />
      <Footer />
    </main>
  );
}
