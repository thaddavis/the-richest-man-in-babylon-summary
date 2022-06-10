import { ImageLoader } from "next/image";

export const myLoader: ImageLoader = ({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) => {
  if (src[0] === "/") {
    return src;
  } else {
    return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
  }
};
