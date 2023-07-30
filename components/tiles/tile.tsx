import { ReactNode } from "react";

export interface Props {
  children?: ReactNode;
}

export const Tile = ({ children }: Props) => {
  return (
    <div className="group h-full w-full overflow-hidden rounded-lg bg-neutral-50 transition-colors focus-within:bg-neutral-100 hover:bg-neutral-100">
      {children}
    </div>
  );
};
