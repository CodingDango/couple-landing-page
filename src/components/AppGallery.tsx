import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import SectionWrapper from "./SectionWrapper";
import FadeInWrapper from "./FadeInWrapper";

const galleryImages = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop",
];

const AppGallery = () => {
  return (
    <SectionWrapper wrapperClassName="px-0!" childrenWrapperClass="max-w-none">
      <div className="flex flex-col gap-24">
        <div className="w-full max-w-7xl mx-auto px-6">
          <FadeInWrapper>
            <h2 className="text-center text-4xl md:text-5xl font-serif">Captured Moments</h2>
          </FadeInWrapper>
          <FadeInWrapper delay={0.2}>
            <div className="text-muted-foreground text-center text-lg mt-6">(Swipe to take a trip down memory lane)</div>
          </FadeInWrapper>
        </div>

        <FadeInWrapper delay={0.4} className="w-full relative space-y-12">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={40} // <--- THE GAP (in pixels). Change this number to change the gap.
            slidesPerView={"auto"} // <--- Lets us set specific widths on the slides below
            centeredSlides={true} // <--- Forces active card to center
            speed={600}
            navigation={{
              nextEl: ".swiper-next-btn",
              prevEl: ".swiper-prev-btn",
            }}
            // Adding padding bottom ensures shadows don't get cut off
            className="pb-8!"
          >
            {galleryImages.map((src, index) => (
              <SwiperSlide
                key={index}
                style={{ width: window.innerWidth < 768 ? "85%" : "400px" }}
              >
                <div>
                  <div className="rounded-2xl border-12 border-white aspect-[3/4] relative group shadow-xl transition-all duration-500 bg-white overflow-hidden">
                    <img
                      src={src}
                      alt="Gallery"
                      className="w-full h-full object-cover select-none"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex justify-center gap-8">
            <Button className="swiper-prev-btn" size={"lg"} variant={"default"}>
              <ArrowLeft size={32} />
            </Button>
            <Button className="swiper-next-btn" size={"lg"} variant={"default"}>
              <ArrowRight size={32} />
            </Button>
          </div>
        </FadeInWrapper>
      </div>
    </SectionWrapper>
  );
};

export default AppGallery;
