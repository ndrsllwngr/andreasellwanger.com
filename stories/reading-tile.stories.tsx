import type { Meta, StoryObj } from "@storybook/react";
import Img from "./assets/little-women.jpg";
import { ReadingTile, Status } from "@/components/tiles/reading-tile";
import { Grid, Section, SectionType } from "@/components/layout/grid";

const meta = {
  component: ReadingTile,
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
} satisfies Meta<typeof ReadingTile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithLink: Story = {
  args: {
    image: {
      src: Img,
      alt: "Screenshot",
    },
    bookDetails: {
      title: "Little Women",
      author: "Louisa May Alcott",
    },
    status: Status.READ,
    topBar: {
      domain: {
        name: "Reading",
      },
      section: "Books",
      link: {
        href: "https://www.goodreads.com/book/show/41557328-little-women",
        tooltip: "View on Goodreads",
      },
    },
  },
};

export const WithoutLink: Story = {
  args: {
    image: {
      src: Img,
      alt: "Screenshot",
    },
    bookDetails: {
      title: "Little Women",
      author: "Louisa May Alcott",
    },
    status: Status.READ,
    topBar: {
      domain: {
        name: "Reading",
      },
      section: "Books",
    },
  },
};
