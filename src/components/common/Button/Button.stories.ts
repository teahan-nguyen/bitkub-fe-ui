import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "./Button";
import { EButtonType } from "@/enums/index";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: EButtonType.PRIMARY,
    label: "Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: EButtonType.SECONDARY,
    label: "Button",
  },
};

export const Warning: Story = {
  args: {
    variant: EButtonType.WARNING,
    label: "Button",
  },
};

export const Positive: Story = {
  args: {
    variant: EButtonType.POSITIVE,
    label: "Button",
  },
};
