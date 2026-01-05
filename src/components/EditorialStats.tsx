import { useInView } from "react-intersection-observer";

import CountUp from "react-countup";
import SectionWrapper from "./SectionWrapper"; // Assuming you have this
import CardsCarousel from "./CardsCarousel";
import { Bus, Coffee, Film, Heart } from "lucide-react";

const stats = [
  { label: "Days Together", value: 2450, Icon: Heart},
  { label: "Cities Visited", value: 14, Icon: Bus},
  { label: "Shared Coffees", value: 850, suffix: "+", Icon: Coffee},
  { label: "Netflix Series Binged", value: 8, Icon: Film},
];

const EditorialStats = () => {
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: true });

  return (
    <div ref={ref}>
      <SectionWrapper wrapperClassName="bg-white!">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <CardsCarousel
            photos={[
              "https://images.stockcake.com/public/b/0/b/b0bfe8c0-f5b4-4148-ab02-5b390130e6e3_large/heart-latte-art-stockcake.jpg",
              "https://www.brides.com/thmb/1rAYwCCxPYLKJ0um7x7I52Z37AM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/datenight-ec8b1611b9f043c28891839eaf7fc81c.jpg",
              "https://images.pexels.com/photos/4406681/pexels-photo-4406681.jpeg",
            ]}
          />

          <div className="flex flex-col justify-center gap-12">
            <h2 className="text-3xl md:text-5xl font-serif">
              Our Story in Numbers
            </h2>

            <div className="space-y-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex justify-between items-baseline border-b border-neutral-200 pb-4"
                >
                  <span className="font-sans text-xl text-muted-foreground flex gap-4 items-center">
                    <stat.Icon/> {stat.label} 
                  </span>
                  <span className="text-5xl md:text-6xl font-serif">
                    {inView ? (
                      <CountUp
                        end={stat.value}
                        duration={2.5}
                        suffix={stat.suffix || ""}
                      />
                    ) : (
                      0
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default EditorialStats;
