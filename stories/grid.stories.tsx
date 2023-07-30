import type { Meta, StoryObj } from "@storybook/react";
import { Grid, Section, SectionType } from "@/components/layout/grid";
import { Tile } from "@/components/tiles/tile";

const meta = {
  component: Grid,
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    children: (
      <>
        <Section sectionType={SectionType.HERO}>
          <Tile></Tile>
        </Section>
        <Section sectionType={SectionType.RECTANGLE}>
          <Tile></Tile>
        </Section>
        <Section sectionType={SectionType.SQUARE}>
          <Tile></Tile>
        </Section>
        <Section sectionType={SectionType.SQUARE}>
          <Tile></Tile>
        </Section>
      </>
    ),
  },
};
