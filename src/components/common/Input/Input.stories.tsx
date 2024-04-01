import type { Meta, StoryObj } from "@storybook/react";

import Input from "./Input";
import { useState } from "react";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {},
  decorators: [
    (Story, { args }) => {
      const [value, setValue] = useState("");
      return (
        <div>
          <Story
            args={{
              ...args,
              value: value,
              onChange: (e) => {
                setValue(e.target.value);
              },
            }}
          />
        </div>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {
    label: "Normal Input",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled input",
    disabled: true,
  },
};

export const PasswordInput: Story = {
  args: {
    label: "Password input",
    type: "password",
    isShowPasswordChecker: true,
  },
};
