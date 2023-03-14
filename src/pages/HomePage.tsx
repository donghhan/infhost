import styled from "styled-components";
import Navbar from "../components/navbar/Index";
import HeroSection from "../components/home/HeroSection";
import PriceSection from "../components/home/PriceSection";
import GoodReasonSection from "../components/home/GoodReasonSection";
import PackageSection from "../components/home/PackageSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <PriceSection />
      <GoodReasonSection />
      <PackageSection />
    </>
  );
}
