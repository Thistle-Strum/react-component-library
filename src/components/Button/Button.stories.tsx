import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import "tailwindcss/tailwind.css";

import Button from "./SelfieButtons";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const SelfieButtons = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SelfieButtons.args = {
  label: "Text",
};
