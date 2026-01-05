import { Heart } from "lucide-react";

const DEFAULT_IMAGE =
  "https://img.freepik.com/free-photo/caucasian-pretty-girl-walking-around-city-with-boyfriend-smiling-brunette-man-spending-weekend-with-girlfriend_197531-12261.jpg?t=st=1767496041~exp=1767499641~hmac=7a85da3ed5504a5d8c5d0fc02d3933c207fbfed2b09269dc774dfe8ecc40ca67";

interface PolaroidProps {
  src?: string;
  wrapperClass?: string;
  classname?: string;
  subtitle?: string;
}

export default function Polaroid({
  src = DEFAULT_IMAGE,
  subtitle,
  wrapperClass,
  classname,
}: PolaroidProps) {
  return (
    <div className={`bg-white max-w-xl flex items-center flex-col p-4 pb-8 sm:p-6 sm:pb-12 rounded-sm shadow-2xl gap-8 ${wrapperClass}`}>
      <div className={`w-full ${classname}`}>
        <img className="rounded-sm object-cover w-full h-full" src={src} />
      </div>

      {/* so all polaroids are consistent heights regardless of subtitle */}
      <span className="text-muted-foreground text-3xl max-w-lg text-center font-handwriting flex gap-4 items-center">
        <Heart/>
        { subtitle ? subtitle : <span className="invisible">empty</span>}
        <Heart/>
      </span>
    </div>
  );
}
