import type { Meta, StoryObj } from "@storybook/react";

import Select from "./Select";
import { useState } from "react";
import { WithThemeSwitcherStoryBookHelper } from "../ThemeSwitcher";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {},
  decorators: [
    (Story, { args }) => {
      const [value, setValue] = useState<string | undefined>();
      return (
        <WithThemeSwitcherStoryBookHelper>
          <Story
            args={{
              ...args,
              value,
              setValue,
            }}
          />
        </WithThemeSwitcherStoryBookHelper>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof Select>;

const options = [
  {
    title: "Paris",
    label: "Paris",
    value: "paris",
  },
  {
    title: "London",
    label: "London",
    value: "london",
  },
  {
    title: "New York",
    label: "New York",
    value: "newyork",
  },
  {
    title: "tnsria esir at",
    label: "tnsria esir at",
    value: "tsratra",
  },
  {
    title: "tsranwfe mstrlam tsram lstaenit seiroa",
    label: "tsranwfe mstrlam tsram lstaenit seiroa",
    value: "tsrawtsra",
  },

  {
    title: "tsrw armstiursawgmztzvira",
    label: "tsrw armstiursawgmztzvira",
    value: "swtsra",
  },
  {
    title: "weitmtksraim utaywum wf",
    label: "weitmtksraim utaywum wf",
    value: "wfgwaw",
  },
  {
    title: "weim zvgarygzwr]u;t",
    label: "weim zvgarygzwr]u;t",
    value: "fwfwfwraaw",
  },
  {
    title: "wefim srain mtsnram ufiwa",
    label: "wefim srain mtsnram ufiwa",
    value: "srawftsravra",
  },
];

export const NormalSelect: Story = {
  args: {
    placeholder: "Select city",
    label: "Select",
    name: "select",
    options,
  },
};

export const SmallSize: Story = {
  args: {
    placeholder: "Select city",
    label: "Select",
    name: "select",
    options,
    size: "small",
  },
};

export const LargeSize: Story = {
  args: {
    placeholder: "Select city",
    label: "Select",
    name: "select",
    options,
    size: "large",
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Select city",
    label: "Select",
    name: "select",
    options,
    disabled: true,
  },
};

export const SelectEmpty: Story = {
  args: {
    placeholder: "Select",
    label: "Select",
    name: "select",
    options: [],
  },
};

export const SelectLoading: Story = {
  args: {
    placeholder: "Select",
    label: "Select",
    name: "select",
    options: [],
    loading: true,
  },
};

export const SelectMultiple: Story = {
  args: {
    placeholder: "Select",
    label: "Select",
    name: "select",
    options,
    isMulti: true,
  },
};
