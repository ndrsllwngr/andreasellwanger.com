import { Props as TopBarProps, TopBar } from "@/components/tiles/topbar";
import { Tile } from "@/components/tiles/tile";

export interface Props {
  date: string;
  excerpt: string;
  title: string;
  topBar: TopBarProps;
}

export const BlogTile = ({ date, excerpt, title, topBar }: Props) => {
  return (
    <Tile>
      <div className="flex h-full w-full flex-col justify-between">
        <TopBar {...topBar}></TopBar>
        <div className="p-5">
          <h3 className="font-fraunces-variation font-fraunces text-3xl font-light">
            {title}
          </h3>
          <span className="mt-2 mb-4 block text-sm -tracking-[0.03em] text-neutral-400">
            {date}
          </span>
          <p className="leading-relaxed text-neutral-700 line-clamp-3 md:line-clamp-4">
            {excerpt}
          </p>
        </div>
      </div>
    </Tile>
  );
};
