import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles (Standard CSS, no magic)
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { ArrowLeft, ArrowRight } from "lucide-react";

const galleryImages = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop",
];

const AppGallery: React.FC = () => {
  return (
    <section className="w-full py-24 bg-stone-50">
      <div className="w-full max-w-7xl mx-auto px-6 mb-16">
        <h2 className="text-center text-5xl font-serif text-stone-900">
          Captured Moments
        </h2>
      </div>

      <div className="w-full relative">
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
          className="!pb-12"
        >
          {galleryImages.map((src, index) => (
            <SwiperSlide
              key={index}
              // THIS STYLE CONTROLS CARD WIDTH
              // Mobile: 85% width. Desktop: 400px fixed width.
              style={{ width: window.innerWidth < 768 ? "85%" : "400px" }}
            >
              <div className="p-2">
                <div className="rounded-[2rem] border-4 border-white aspect-[3/4] relative group shadow-lg transition-all duration-500 bg-white overflow-hidden">
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

        {/* Custom Navigation Buttons */}
        <div className="flex justify-center gap-8 mt-4">
          <button className="swiper-prev-btn h-14 w-14 rounded-full border-2 border-stone-800 flex items-center justify-center hover:bg-stone-800 hover:text-white transition-all cursor-pointer z-10">
            <ArrowLeft size={24} />
          </button>
          <button className="swiper-next-btn h-14 w-14 rounded-full border-2 border-stone-800 flex items-center justify-center hover:bg-stone-800 hover:text-white transition-all cursor-pointer z-10">
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AppGallery;
