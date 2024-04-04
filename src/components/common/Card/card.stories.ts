import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./card";
import { EStatusBadge } from "@/enums";

const meta = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "ChatGPT 4",
    title: "Marketing",
    data: "200 MB",
    statusBadge: EStatusBadge.ERROR,
    firstButtonTitle: "Chat",
    secondButtonTitle: "Train",
  },
};
