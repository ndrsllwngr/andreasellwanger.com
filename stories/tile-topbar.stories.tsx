import type { Meta, StoryObj } from "@storybook/react";
import { TopBar } from "@/components/tiles/topbar";
import { Tile } from "@/components/tiles/tile";

const meta = {
  component: TopBar,
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof TopBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    domain: {
      name: "Projects",
    },
    section: "Lorem Ipsum",
    link: {
      href: "https://www.andreasellwanger.com",
      tooltip: "View project",
    },
  },
};

export const WithoutSection: Story = {
  args: {
    domain: {
      name: "Projects",
    },
    link: {
      href: "https://www.andreasellwanger.com",
      tooltip: "View project",
    },
  },
};

export const WithoutLink: Story = {
  args: {
    domain: {
      name: "Projects",
    },
    section: "Lorem Ipsum",
  },
};

export const WithGroupHover: Story = {
  args: {
    domain: {
      name: "Projects",
    },
    section: "Lorem Ipsum",
    link: {
      href: "https://www.andreasellwanger.com",
      tooltip: "View project",
    },
  },
  decorators: [
    (story) => (
      <div className={"h-16"}>
        <Tile>{story()}</Tile>
      </div>
    ),
  ],
};

export const WithDomainLink: Story = {
  args: {
    domain: {
      name: "Projects",
      href: "/projects",
      tooltip: "Browse projects",
    },
    section: "Lorem Ipsum",
    link: {
      href: "https://www.andreasellwanger.com",
      tooltip: "View project",
    },
  },
  decorators: [
    (story) => (
      <div className={"p-16"}>
        <div className={"h-16"}>
          <Tile>{story()}</Tile>
        </div>
      </div>
    ),
  ],
};
