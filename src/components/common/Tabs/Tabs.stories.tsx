import type { Meta, StoryObj } from "@storybook/react";

import Tabs from "./Tabs";
import { useState } from "react";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  argTypes: {},
  decorators: [
    (Story, { args }) => {
      const [activeKey, setActiveKey] = useState("1");
      return (
        <div>
          <Story
            args={{
              ...args,
              activeKey,
              setActiveKey,
            }}
          />
        </div>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const BasicTab: Story = {
  args: {
    items: [
      {
        label: "Tab 1",
        children: <div className=" ">Content tab 1</div>,
        key: "1",
      },
      {
        label: "Tab 2",
        children: <div className=" ">Content tab 2</div>,
        key: "2",
      },
    ],
  },
};
