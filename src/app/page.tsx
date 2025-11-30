import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Events from "@/components/Events";
import Identity from "@/components/Identity";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-black">
      <Hero />
      <Mission />
      <Events />
      <Identity />
      <Footer />
    </div>
  );
}
