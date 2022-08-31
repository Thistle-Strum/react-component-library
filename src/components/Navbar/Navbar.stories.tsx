import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import "tailwindcss/tailwind.css";

import { Navbar } from "./Navbar";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Navbar",
  component: Navbar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Navbar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Navbar1 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Navbar1.args = {};

// export const ClickMe = Template.bind({});
// ClickMe.args = {
//   label: "Click Me",
// };
