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
    <div id="timeline">
      <SectionWrapper wrapperClassName="bg-white">
        <section className=" flex flex-col gap-24">
          <FadeInWrapper>
            <h2 className="font-serif text-4xl md:text-5xl text-center">
              Timeline
            </h2>
          </FadeInWrapper>
          <div className="flex flex-col gap-20">
            {timelineEvents.map(({ year, title, description, image }, idx) => {
              const isEven = (idx + 1) % 2 == 0;

              return (
                <div
                  className={`flex flex-col md:flex-row gap-8 sm:gap-12 items-center text-center md:text-start ${
                    isEven ? "md:justify-end md:text-end" : ""
                  }`}
                >
                  <FadeInWrapper
                    className={`overflow-hidden aspect-square max-w-sm w-full p-4 shadow-2xl rounded-2xl ${
                      isEven ? "md:order-1 md:rotate-3" : "md:-rotate-3"
                    }`}
                  >
                    <img
                      className="object-cover w-full h-full rounded-2xl"
                      src={image}
                    />
                  </FadeInWrapper>

                  <FadeInWrapper
                    delay={0.2}
                    className={`flex flex-col gap-4 ${
                      isEven ? "md:items-end" : ""
                    }`}
                  >
                    <Badge
                      variant={"default"}
                      className="px-3 py-1 tracking-widest mx-auto md:mx-0"
                    >
                      {year}
                    </Badge>

                    <h3 className="text-3xl md:text-4xl font-serif">{title}</h3>
                    <p className="text-lg text-accent-foreground leading-relaxed max-w-md">
                      {description}
                    </p>
                  </FadeInWrapper>
                </div>
              );
            })}
          </div>
        </section>
      </SectionWrapper>
    </div>
  );
};

export default Timeline;
