import Image, { StaticImageData } from "next/image";

export default function CustomImage({
  src,
  childClassName,
  className,
  dir,
}: {
  src: StaticImageData;
  childClassName?: string;
  className?: string;
  dir?: "left" | "right";
}) {
  return (
    <div
      className={`${className} w-fit rotate-45 rounded-lg overflow-hidden shadow-black ${
        dir === "right" ? "shadowRight" : dir === "left" ? "shadowLeft" : null
      } `}
    >
      <Image
        src={src}
        alt="image"
        className={`${childClassName} h-[100px] md:h-[200px] w-[100px] md:w-[200px] -rotate-45 scale-150 object-cover`}
      />
    </div>
  );
}
