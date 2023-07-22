import Care from "../components/Care";
import Carrousel from "../components/Carrousel";
import Covid from "../components/Covid";
import DataInsights from "../components/DataInsights";
import FindDoctor from "../components/FindDoctor";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HealthEquity from "../components/HealthEquity";
import LastNews from "../components/LastNews";
import Testimonial from "../components/Testimonial";
import WhoWeAre from "../components/WhoWeAre";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SOMOS COMMUNITY CARE | HOME",
  description:
    "SOMOS is the only successful total cost of care Value-Based Payment model implemented by a physician-led group.",
};

export default function Home() {
  return (
    <main className="home">
      <Header />
      <Carrousel />
      <FindDoctor />
      <WhoWeAre />
      <DataInsights />
      <HealthEquity />
      <Care />
      <Covid />
      <LastNews />
      <Testimonial />
      <Footer />
    </main>
  );
}
