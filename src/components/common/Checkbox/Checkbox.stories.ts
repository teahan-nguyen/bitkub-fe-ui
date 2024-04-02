import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Check: Story = {
  args: {
    value: "checkbox",
    checked: true,
    label: "Check",
  },
};

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
    checked: true,
    value: "checkbox",
    label: "Indeterminate",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: "checkbox",
    label: "Disabled",
  },
};
