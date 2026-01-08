import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { HeartHandshake } from 'lucide-react';
import SectionWrapper from "./SectionWrapper";
import { scrollToSection } from "@/lib/utils";

const sections = [
  { id: "timeline", name: "Timeline" },
  { id: "gallery", name: "Gallery" },
  { id: "stats", name: "Romantic Stats" },
  { id: "heart-section", name: "Sweet Gift" },
];

export default function Footer() {
  return (
    <SectionWrapper wrapperClassName="bg-white">
      <footer className="flex flex-col justify-center items-center gap-12">
        <div className="flex flex-col gap-10 justify-center items-center">
          <div className="flex gap-8 flex-wrap items-center justify-center">
            {sections.map(({ id, name }) => (
              <button
                className="cursor-pointer font-serif text-lg hover hover:text-black hover:underline underline-offset-4 transition-all"
                onClick={() => scrollToSection(id)}
              >
                {name}
              </button>
            ))}
          </div>

        </div>
        <div className="font-serif flex justify-between items-center gap-4">
          <span className="text-4xl">S</span>
          <div className="text-muted-foreground"><HeartHandshake/></div>
          <span className="text-4xl">C</span>
        </div>

        <div className="text-muted-foreground italic">Our story began in November 2018</div>
      </footer>
    </SectionWrapper>
  );
}
