import type { Meta, StoryObj } from "@storybook/react";
import { TopBar } from "@/components/tiles/topbar";
import { Tile } from "@/components/tiles/tile";

const meta = {
  component: Tile,
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
  decorators: [(story) => <div className={"mb-8"}>{story()}</div>],
} satisfies Meta<typeof Tile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <TopBar
          domain={{ name: "Domain" }}
          section={"Section"}
          link={{
            href: "www.andreasellwanger.com",
            tooltip: "go to bla",
          }}
        />
      </>
    ),
  },
  decorators: [
    (story) => (
      <div
        className={
          "grid grid-cols-1 sm:grid-flow-row-dense sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        }
      >
        <div className={"aspect-square px-1 pb-2"}>{story()}</div>
      </div>
    ),
  ],
};

export const Empty: Story = {
  args: {
    children: <></>,
  },
  decorators: [
    (story) => (
      <div
        className={
          "grid grid-cols-1 sm:grid-flow-row-dense sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        }
      >
        <div className={"aspect-[2] sm:col-span-2 px-1 pb-2"}>{story()}</div>
      </div>
    ),
  ],
};
