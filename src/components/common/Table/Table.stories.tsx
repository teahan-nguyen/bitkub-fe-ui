import type { Meta, StoryObj } from "@storybook/react";

import Table from "./Table";
import { WithThemeSwitcherStoryBookHelper } from "../ThemeSwitcher";

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
  tags: ["autodocs"],
  argTypes: {},
  decorators: [
    (Story, { args }) => {
      return (
        <WithThemeSwitcherStoryBookHelper>
          <Story args={{ ...args }} />
        </WithThemeSwitcherStoryBookHelper>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof Table>;

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
];

const dataSource = [
  {
    name: "tsitsi",
    age: 44,
    key: "1",
    address: "tsnrea ntsiran",
  },
  {
    name: "tsitsifwatsr",
    age: 44,
    key: "2",
    address: "tsnrea ntsiran",
  },
  {
    name: "fagvsaa",
    age: 44,
    key: "3",
    address: "tsnrea ntsiran22",
  },
];

export const Basic: Story = {
  args: {
    columns,
    dataSource,
    loading: false,
  },
};

export const Loading: Story = {
  args: {
    columns,
    dataSource,
    loading: true,
  },
};

export const Empty: Story = {
  args: {
    columns,
    dataSource: [],
    loading: false,
  },
};
