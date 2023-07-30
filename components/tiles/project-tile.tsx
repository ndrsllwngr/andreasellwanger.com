import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Tile } from "@/components/tiles/tile";
import { Props as TopBarProps, TopBar } from "@/components/tiles/topbar";

export interface Props {
  image: {
    src: string | StaticImport;
    alt: string;
  };
  topBar: TopBarProps;
}

export const ProjectTile = ({ image, topBar }: Props) => {
  return (
    <Tile>
      <div className="relative isolate h-full w-full">
        <Image
          src={image.src}
          alt={image.alt}
          className={
            "-z-10 object-contain transition-transform group-hover:scale-105"
          }
          loading={"lazy"}
          fill={true}
        ></Image>
        <TopBar {...topBar} />
      </div>
    </Tile>
  );
};
