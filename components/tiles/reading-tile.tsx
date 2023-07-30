import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Props as TopBarProps, TopBar } from "@/components/tiles/topbar";
import { Tile } from "@/components/tiles/tile";

export enum Status {
  TO_READ = "TO READ",
  READING = "READING",
  READ = "READ",
}

export interface Props {
  bookDetails: {
    title: string;
    author: string;
  };
  image: {
    src: string | StaticImport;
    alt: string;
  };
  status: Status;
  topBar: TopBarProps;
}

export const ReadingTile = ({ bookDetails, image, status, topBar }: Props) => {
  return (
    <Tile>
      <div className="isolate flex h-full w-full flex-col">
        <TopBar {...topBar}></TopBar>
        <div className="grid grow grid-cols-2 items-end gap-6 px-7 pb-10">
          <Image
            src={image.src}
            alt={image.alt}
            className={
              "rounded shadow-lg transition-transform group-focus-within:-rotate-3 group-focus-within:scale-110 group-focus-within:shadow-xl group-hover:-rotate-3 group-hover:scale-110 group-hover:shadow-xl max-w-full h-auto"
            }
            loading={"lazy"}
          ></Image>
          <div className="-tracking-[0.03em]">
            <div
              className={cn(
                "inline-block rounded px-1.5 pt-0.5 pb-1 font-mono text-sm tracking-tight shadow-inset-skeuo",
                {
                  "bg-rose-400/40 text-rose-900": status === Status.TO_READ,
                  "bg-amber-400/40 text-amber-900": status === Status.READING,
                  "bg-green-400/40 text-green-890": status === Status.READ,
                },
              )}
            >
              <span>{status}</span>
            </div>
            <h3 className="mt-3 line-clamp-3">{bookDetails.title}</h3>
            <span className="text-neutral-400">{bookDetails.author}</span>
          </div>
        </div>
      </div>
    </Tile>
  );
};
