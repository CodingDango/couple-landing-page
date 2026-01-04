import SectionWrapper from "./SectionWrapper";
import FadeInWrapper from "./FadeInWrapper";
import { Badge } from "./ui/badge";

const timelineEvents = [
  {
    year: "2018",
    title: "The First Meeting",
    description:
      "We met at a coffee shop in Brooklyn. It was raining, and Cameron offered to share his umbrella. We talked for three hours.",
    image:
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1000&auto=format&fit=crop", // Coffee shop vibe
  },
  {
    year: "2019",
    title: "Our First Trip",
    description:
      "We backpacked through Italy. We got lost in Venice, ate too much pasta, and realized we made a pretty good team.",
    image:
      "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=1000&auto=format&fit=crop", // Venice vibe
  },
  {
    year: "2021",
    title: "She Said Yes",
    description:
      "On a quiet hike during sunset, Cameron got down on one knee. It was the easiest 'Yes' of Sarah's life.",
    image:
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1000&auto=format&fit=crop", // Ring/proposal vibe
  },
];

const Timeline = () => {
  return (
    <SectionWrapper wrapperClassName="bg-white">
      <div className=" flex flex-col gap-24">
        <h2 className="font-serif text-3xl md:text-5xl text-center">
          Timeline
        </h2>
        <div className="flex flex-col gap-20">
          {timelineEvents.map(({ year, title, description, image }, idx) => {
            const isEven = (idx + 1) % 2 == 0;

            return (
              <div
                className={`flex gap-12 items-center ${
                  isEven ? "justify-end text-end" : ""
                }`}
              >
                <FadeInWrapper
                  className={`aspect-square max-w-sm w-full p-4 shadow-2xl rounded-full ${
                    isEven ? "order-1" : ""
                  }`}
                >
                  <img
                    className="object-cover w-full h-full rounded-full"
                    src={image}
                  />
                </FadeInWrapper>

                <FadeInWrapper
                  delay={0.2}
                  className={`flex flex-col gap-4 ${
                    isEven ? "items-end" : ""
                  }`}
                >
                  <Badge
                    variant={"default"}
                    className="px-3 py-1 tracking-widest"
                  >
                    {year}
                  </Badge>

                  <h3 className="text-4xl font-serif">{title}</h3>
                  <p className="text-lg text-accent-foreground leading-relaxed max-w-md">
                    {description}
                  </p>
                </FadeInWrapper>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Timeline;
