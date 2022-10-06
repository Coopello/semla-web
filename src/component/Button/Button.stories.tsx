import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { Button } from "./Button";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default: ComponentStory<typeof Button> = Template.bind({});
Default.args = {
  children: "primary",
  onClick: () => {
    alert("クリック");
  },
};
Default.storyName = "primary";

export const PrimaryOutLine: ComponentStory<typeof Button> = Template.bind({});
PrimaryOutLine.args = {
  color: "primaryOutLine",
  onClick: () => {
    alert("クリック");
  },
  children: "primaryOutLine",
};
PrimaryOutLine.storyName = "primaryOutLine";

export const Gray: ComponentStory<typeof Button> = Template.bind({});
Gray.args = {
  color: "gray",
  onClick: () => {
    alert("クリック");
  },
  children: "gray",
};
Gray.storyName = "gray";
