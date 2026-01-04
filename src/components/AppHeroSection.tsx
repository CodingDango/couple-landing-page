import FadeInWrapper from "./FadeInWrapper";
import Polaroid from "./Polaroid";
import SectionWrapper from "./SectionWrapper";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const AppHeroSection = () => {
  return (
    <SectionWrapper>
      <div className="flex-col lg:flex-row flex gap-16 items-center justify-between">
        <div className="flex flex-col gap-6 text-center lg:text-start">
          <FadeInWrapper className="text-sm tracking-widest text-muted-foreground">
            EST. NOVEMBER 24, 2023
          </FadeInWrapper>

          <FadeInWrapper className="font-serif text-5xl md:text-7xl" delay={0.2}>
            Sarah <span className="text-muted-foreground">&</span>
            <br />
            Cameron
          </FadeInWrapper>

          <FadeInWrapper delay={0.4}>
            <p className="text-muted-foreground max-w-md text-lg">
              We’re getting married. We can’t wait to celebrate our special day
              with you.
            </p>
          </FadeInWrapper>

          <FadeInWrapper delay={0.6}>
            <Button size={"lg"}>See Our Gallery</Button>
          </FadeInWrapper>
        </div>

        <FadeInWrapper delay={0.8}>
          <Polaroid 
            subtitle="Happy Days"
          />
        </FadeInWrapper>
      </div>
    </SectionWrapper>
  );
};

export default AppHeroSection;
