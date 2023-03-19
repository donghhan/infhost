import Navbar from "../components/navbar/Index";
import HeroSection from "../components/home/HeroSection";
import PriceSection from "../components/home/PriceSection";
import GoodReasonSection from "../components/home/GoodReasonSection";
import PackageSection from "../components/home/PackageSection";
import MigrationSection from "../components/home/MigrationSection";
import EverydaySection from "../components/home/EverydaySection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <PriceSection />
      <GoodReasonSection />
      <PackageSection />
      <MigrationSection />
      <EverydaySection />
    </>
  );
}
