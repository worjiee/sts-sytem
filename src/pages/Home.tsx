import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SDGInfo from "@/components/SDGInfo";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <SDGInfo />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
