import type { Meta, StoryObj } from "@storybook/react";
import Img from "./assets/bavaria.jpg";
import { FilmTile } from "@/components/tiles/film-tile";
import { Grid, Section, SectionType } from "@/components/layout/grid";

const meta = {
  component: FilmTile,
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
  decorators: [
    (story) => (
      <Grid>
        <Section sectionType={SectionType.RECTANGLE}>{story()}</Section>
      </Grid>
    ),
  ],
} satisfies Meta<typeof FilmTile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithCaption: Story = {
  args: {
    image: {
      src: Img,
      alt: "Screenshot",
    },
    details: "Lorem Ipsum",
    topBar: {
      domain: {
        name: "Hobbies",
      },
      section: "Norway",
      link: {
        href: "https://www.andreasellwanger.com",
        tooltip: "Watch on Instagram",
      },
    },
  },
};

export const WithoutCaption: Story = {
  args: {
    image: {
      src: Img,
      alt: "Screenshot",
    },
    topBar: {
      domain: {
        name: "Hobbies",
      },
      section: "Norway",
      link: {
        href: "https://www.andreasellwanger.com",
        tooltip: "Watch on Instagram",
      },
    },
  },
};
