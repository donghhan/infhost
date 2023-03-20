import Navbar from "../components/navbar/Index";
import HeroSection from "../components/home/HeroSection";
import PriceSection from "../components/home/PriceSection";
import GoodReasonSection from "../components/home/GoodReasonSection";
import PackageSection from "../components/home/PackageSection";
import MigrationSection from "../components/home/MigrationSection";
import EverydaySection from "../components/home/EverydaySection";
import DidWeConvinceYou from "../components/common/DidWeConvinceYou";
import Footer from "../components/footer/Footer";

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
      <DidWeConvinceYou />
      <Footer />
    </>
  );
}
