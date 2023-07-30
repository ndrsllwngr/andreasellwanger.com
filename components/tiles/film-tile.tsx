import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { Props as TopBarProps, TopBar } from "@/components/tiles/topbar";
import { Tile } from "@/components/tiles/tile";

export interface Props {
  image: {
    src: string | StaticImport;
    alt: string;
  };
  details?: string;
  topBar: TopBarProps;
}

export const FilmTile = ({ image, details, topBar }: Props) => {
  return (
    <Tile>
      <div className="relative flex h-full w-full flex-col justify-between">
        <Image
          src={image.src}
          alt={image.alt}
          className={
            "rounded-lg object-cover transition-all group-focus-within:mt-12 group-hover:mt-12"
          }
          loading={"lazy"}
          fill={true}
        ></Image>
        <TopBar {...topBar} />
        {details && (
          <div className="z-10 p-2">
            <span className="inline-block rounded-lg px-2 py-1 text-sm text-white/70 transition-colors group-focus-within:bg-black/70 group-hover:bg-black/70">
              {details}
            </span>
          </div>
        )}
      </div>
    </Tile>
  );
};
