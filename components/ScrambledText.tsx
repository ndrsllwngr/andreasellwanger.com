"use client";
import { useInterval, useIsMounted } from "@/lib/hooks";
import * as React from "react";

interface ScrambledTextProps {
  children: string;
  /**
   * The speed at which to reveal the characters
   * @default 0.5
   */
  speed?: number;
}

/**
 * ScrambledText
 *
 * @see https://www.nan.fyi/experiments/scrambled-text
 *
 * @param children
 * @param speed
 * @constructor
 */
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

const CHARACTERS = [
  "A",
  "a",
  "B",
  "b",
  "C",
  "c",
  "D",
  "d",
  "E",
  "e",
  "F",
  "f",
  "G",
  "g",
  "H",
  "h",
  "I",
  "i",
  "J",
  "j",
  "K",
  "k",
  "L",
  "l",
  "M",
  "m",
  "N",
  "n",
  "O",
  "o",
  "P",
  "p",
  "Q",
  "q",
  "R",
  "r",
  "S",
  "s",
  "T",
  "t",
  "U",
  "u",
  "V",
  "v",
  "W",
  "w",
  "X",
  "x",
  "Y",
  "y",
  "Z",
  "z",
  "~",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "+",
  "=",
  "[",
  "]",
  "{",
  "}",
  "|",
  ";",
  ":",
  ",",
  ".",
  "/",
  "<",
  ">",
  "?",
];

const scramble = (text: string) => {
  const chars = text.split("");
  const obfuscatedChars = chars.map((char) => {
    if (/^\s$/.test(char)) {
      return char;
    }
    const randomIndex = Math.floor(Math.random() * CHARACTERS.length);
    return CHARACTERS[randomIndex];
  });
  return obfuscatedChars.join("");
};

export const getScrambledState = (
  text: string,
  windowSize: number,
  windowStart: number
) => {
  const unscrambled = text.slice(0, windowStart);
  const scrambled = scramble(text.slice(windowStart, windowStart + windowSize));
  return [unscrambled, scrambled];
};
