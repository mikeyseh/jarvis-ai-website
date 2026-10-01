import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main
      className="relative min-h-screen overflow-hidden"
      style={{ background: "var(--bg-primary)" }}
    >
      <Navbar />
      <Hero />
    </main>
  );
}
