import styled from "styled-components";
import Navbar from "../components/navbar/Index";
import HeroSection from "../components/home/HeroSection";
import PriceSection from "../components/home/PriceSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <PriceSection />
    </>
  );
}
