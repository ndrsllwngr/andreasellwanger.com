import type { Meta, StoryObj } from "@storybook/react";
import Img from "./assets/zoll-auktion.png";
import { ProjectTile } from "@/components/tiles/project-tile";
import { Grid, Section, SectionType } from "@/components/layout/grid";

const meta = {
  component: ProjectTile,
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
} satisfies Meta<typeof ProjectTile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithLink: Story = {
  args: {
    image: {
      src: Img,
      alt: "Screenshot",
    },
    topBar: {
      domain: {
        name: "Projects",
      },
      section: "Zoll-Auktion",
      link: {
        href: "https://www.andreasellwanger.com",
        tooltip: "View project",
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
    topBar: {
      domain: {
        name: "Projects",
      },
      section: "Zoll-Auktion",
    },
  },
};
