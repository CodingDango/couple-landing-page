import React from 'react';
import FadeInWrapper from '@/components/FadeInWrapper';

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

const AITimeline: React.FC = () => {
  return (
    <div className="flex flex-col space-y-24 md:space-y-32">
      {timelineEvents.map((event, index) => {
        
        // This logic determines if the text is on the Left (even index) or Right (odd index)
        const isEven = index % 2 === 0;

        return (
          <div key={index} className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
            
            {/* --- IMAGE SIDE --- */}
            {/* On mobile, image is always first (order-1). 
                On desktop, if it's Even, it's 2nd (Right). If Odd, it's 1st (Left). */}
            <div className={`w-full md:w-1/2 order-1 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
               <FadeInWrapper delay={0.2} xOffset={isEven ? 20 : -20}> {/* Slide in from side */}
                  <div className="relative group cursor-pointer">
                    {/* The Image Card (Reusing your Hero style) */}
                    <div className="bg-stone-50 p-3 rounded-2xl shadow-lg transform transition-transform duration-500 group-hover:-rotate-1">
                        <div className="aspect-[4/3] overflow-hidden rounded-xl">
                            <img 
                                src={event.image} 
                                alt={event.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                    </div>
                    {/* Decor element behind */}
                    <div className="absolute inset-0 bg-stone-200 rounded-2xl -z-10 transform translate-x-4 translate-y-4 md:translate-x-6 md:translate-y-6" />
                  </div>
               </FadeInWrapper>
            </div>

            {/* --- TEXT SIDE --- */}
            <div className={`w-full md:w-1/2 flex flex-col justify-center order-2 ${isEven ? 'md:order-1 md:items-end md:text-right' : 'md:order-2 md:items-start md:text-left'} text-center md:text-left`}>
                <FadeInWrapper delay={0.4}>
                    <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-white bg-stone-900 rounded-full">
                        {event.year}
                    </span>
                    <h3 className="text-4xl font-serif text-stone-800 mb-4">
                        {event.title}
                    </h3>
                    <p className="text-lg text-stone-600 leading-relaxed max-w-md">
                        {event.description}
                    </p>
                </FadeInWrapper>
            </div>

          </div>
        );
      })}
    </div>
  );
};

export default AITimeline;