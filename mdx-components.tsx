import type { MDXComponents } from 'mdx/types'
import { A as a } from "@/components/mdx/a";
import { H1 as h1 } from "@/components/mdx/h1";
import { H2 as h2 } from "@/components/mdx/h2";
import { H3 as h3 } from "@/components/mdx/h3";
import { P as p } from "@/components/mdx/p";
import { OL as ol } from "@/components/mdx/ol";
import { UL as ul } from "@/components/mdx/ul";
import { LI as li } from "@/components/mdx/li";
import { HR as hr } from "@/components/mdx/hr";
import { Code as code } from "@/components/mdx/code";
// import { Tweet } from "@/components/mdx/tweet";
// import { Image as img } from "@/components/mdx/image";
import { Figure } from "@/components/mdx/figure";
import { Snippet } from "@/components/mdx/snippet";
import { Caption } from "@/components/mdx/caption";
import { Callout } from "@/components/mdx/callout";
import { YouTube } from "@/components/mdx/youtube";
import { Ref, FootNotes, FootNote } from "@/components/mdx/footnotes";
import { Blockquote as blockquote } from "@/components/mdx/blockquote";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    // h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
    ...components,
    a,
    h1,
    h2,
    h3,
    p,
    ol,
    ul,
    li,
    hr,
    code,
    pre: Snippet,
    // img: Image,
    blockquote,
    // Tweet,
    // Image,
    Figure,
    Snippet,
    Caption,
    Callout,
    YouTube,
    Ref,
    FootNotes,
    FootNote,
  }
}