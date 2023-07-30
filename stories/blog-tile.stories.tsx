import type { Meta, StoryObj } from "@storybook/react";
import { BlogTile } from "@/components/tiles/blog-tile";
import { Grid, Section, SectionType } from "@/components/layout/grid";

const meta = {
  component: BlogTile,
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
  decorators: [
    (story) => (
      <Grid>
        <Section sectionType={SectionType.SQUARE}>{story()}</Section>
      </Grid>
    ),
  ],
} satisfies Meta<typeof BlogTile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    date: "July 29, 2023",
    title: "Prepare for your interview",
    excerpt:
      "When you're interviewing for a software engineering role, you'll likely face both technical and behavioral interviews. To prepare for these interviews, you can use resources like The Tech Interview Handbook, The System Design Primer, and Leetcode. For behavioral interviews, the Amazon STAR answer format and mock interviews are helpful. Be sure to research the company and practice your answers to common interview questions. And most importantly, be yourself!",
    topBar: {
      domain: {
        name: "Writing",
      },
      section: "Blog",
      link: {
        href: "https://ndrsllwngr.wordpress.com/2023/07/28/prepare-for-your-interview/",
        tooltip: "Read full blog post",
      },
    },
  },
};
