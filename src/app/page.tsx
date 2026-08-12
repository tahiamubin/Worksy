import Image from "next/image";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/Features";
import HowItWorksSection from "./components/HowItWorks";

export default function Home() {
  return (
    <div >
    <HeroSection/>
    <FeaturesSection/>
    <HowItWorksSection/>
    </div>
  );
}
