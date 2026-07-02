import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Background } from "@/components/portfolio/Background";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Achievements } from "@/components/portfolio/Achievements";
import { Education } from "@/components/portfolio/Education";
import { Certificates } from "@/components/portfolio/Certificates";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";


export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Kashi",
          jobTitle: "AI & Machine Learning Engineer",
          description:
            "AI & ML engineer specializing in Deep Learning, Computer Vision, Wireless Sensing, IoT, and Full Stack Development.",
          knowsAbout: [
            "Artificial Intelligence",
            "Deep Learning",
            "Computer Vision",
            "Transformer Models",
            "Federated Learning",
            "WiFi CSI Sensing",
            "IoT",
            "Full Stack Development",
          ],
        }),
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  return (
    <div className="relative min-h-screen">
      <Background />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Education />
        <GitHubSection />
        <Certificates />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
