import type { Meta, StoryObj } from "@storybook/react";
import { InputNumber } from "./InputNumber";

const meta = {
  title: "Components/Input number",
  component: InputNumber,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof InputNumber>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Quantity",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: "Disabled",
  },
};
