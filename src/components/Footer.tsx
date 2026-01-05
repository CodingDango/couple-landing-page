import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
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
                className=" cursor-pointer font-serif text-lg hover hover:text-black hover:underline underline-offset-4 transition-all"
                onClick={() => scrollToSection(id)}
              >
                {name}
              </button>
            ))}
          </div>
          <div className="flex gap-8 items-center ">
            <a href="#" className="hover:text-rose-400 transition-colors">
              <FaFacebook className="size-8" />
            </a>
            <a href="#" className="hover:text-rose-400 transition-colors">
              <FaInstagram className="size-8" />
            </a>
            <a href="#" className="hover:text-rose-400 transition-colors">
              <FaTiktok className="size-8" />
            </a>
          </div>
        </div>
        {/* --- THE MONOGRAM --- */}
        <div className="font-serif ">
          <span className="text-4xl">Sarah</span>
          <span className="text-2xl text-muted-foreground mx-2">&</span>
          <span className="text-4xl">Cameron</span>
        </div>
      </footer>
    </SectionWrapper>
  );
}
