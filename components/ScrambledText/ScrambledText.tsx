import { useInterval, useIsMounted } from "@/lib/hooks";
import * as React from "react";
import { getScrambledState } from "./utils";

/**
 * TextScrambler
 *
 * @see https://www.nan.fyi/experiments/scrambled-text
 */

interface ScrambledTextProps {
  children: string;
  /**
   * The speed at which to reveal the characters
   * @default 0.5
   */
  speed?: number;
}

export const ScrambledText = ({
  children,
  speed = 0.5,
}: ScrambledTextProps) => {
  const mounted = useIsMounted();
  const size = children.length;

  const [[unscrambled, scrambled], setScrambledText] = React.useState(
    getScrambledState(children, size, 0)
  );
  const [count, increment] = React.useReducer((state) => state + 1, 0);
  const finished = count > size;

  useInterval(
    () => {
      increment();
      setScrambledText(getScrambledState(children, size, count));
    },
    finished ? null : 30 / speed
  );

  return (
    <span className={"inline-grid"}>
      <span
        className={
          "opacity-0 row-start-1 col-start-1 row-end-auto col-end-auto"
        }
      >
        {children}
      </span>
      {mounted() ? (
        <span
          className={"row-start-1 col-start-1 row-end-auto col-end-auto"}
          aria-hidden={true}
        >
          {unscrambled}
          {scrambled}
        </span>
      ) : null}
    </span>
  );
};
