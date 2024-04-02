import type { Meta, StoryObj } from "@storybook/react";
import { Radio } from "./Radio";

const meta = {
  title: "Components/Radio",
  component: Radio,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    value: "Radio",
    checked: false,
    label: "Check",
  },
};

export const Disabled: Story = {
  args: {
    defaultChecked: true,
    disabled: true,
    value: "Radio",
    label: "Disabled",
  },
};
