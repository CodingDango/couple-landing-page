import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';

// @ts-expect-error: so it works
import 'swiper/css';

// @ts-expect-error: so it works
import 'swiper/css/effect-cards';

interface Props {
  photos?: string[];
}

export default function CardsCarousel({ photos = [] } : Props) {
  if (!photos || photos.length === 0) {
    return <div className="text-center text-gray-500">No photos to display.</div>;
  }
  
  return (
    <Swiper
      effect={'cards'}
      grabCursor={true}
      modules={[EffectCards]}
      className="w-72 h-104 md:w-88 md:h-120"
    >
      {photos.map((photoUrl, index) => (
        <SwiperSlide
          key={index}
          className="bg-white rounded-2xl shadow-2xl"
        >
          <div className="w-full h-full rounded-2xl  overflow-hidden">
            <img
              src={photoUrl}
              alt={`Moment ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}