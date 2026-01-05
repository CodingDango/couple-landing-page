import FadeInWrapper from "./FadeInWrapper";
import InteractiveHeart from "./InteractiveHeart";
import SectionWrapper from "./SectionWrapper";

export default function HeartSection() {
  return (
    <SectionWrapper>
      <div className="flex flex-col items-center gap-24">
        <div className="text-center flex flex-col gap-4">
          <FadeInWrapper>
            <h2 className="text-4xl md:text-5xl font-serif">Our Sweet Love</h2>
          </FadeInWrapper>

          <FadeInWrapper delay={0.2}>
            <p className="text-muted-foreground text-lg">
              Life is sweet with you in it (Drag to take a look)
            </p>
          </FadeInWrapper>
        </div>

        <FadeInWrapper delay={0.4} className="w-full relative">

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-lg h-128 bg-rose-200 rounded-full blur-2xl -z-10 opacity-70"></div>
          <InteractiveHeart />
        </FadeInWrapper>
      </div>
    </SectionWrapper>
  );
}
