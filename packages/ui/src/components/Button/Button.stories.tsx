import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"], // حالا که می‌دانیم سیستم سالم است، این را برمی‌گردانیم
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "destructive", "outline", "secondary", "ghost", "link"],
    },
    size: {
      control: { type: "select" },
      options: ["default", "sm", "lg", "icon"],
    },
    children: {
      control: { type: "text" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "دکمه اصلی",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "دکمه ثانویه",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "دکمه حذف",
  },
};