import NextImage from "next/image";
import { getStrapiMedia } from "../lib/media";

interface ImageProps {
  image: any;
  classes?: string;
  width?: number;
  height?: number;
}

const Image = (props: ImageProps) => {
  const { image, classes, width, height } = props;
  const {
    alternativeText,
    width: imageWidth,
    height: imageHeight,
  } = image.data.attributes;

  return (
    <NextImage
      className={classes || ""}
      width={`${width || imageWidth}px`}
      height={`${height || imageHeight}px`}
      src={getStrapiMedia(image)}
      alt={alternativeText || ""}
    />
  );
};

export default Image;
