import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import "tailwindcss/tailwind.css";

import Nav from "./Nav";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Button",
  component: Nav,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Nav>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Nav> = (args) => <Nav {...args} />;

export const Nav1 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Nav1.args = {
  // label: "Hello Victor!",
};

// export const ClickMe = Template.bind({});
// ClickMe.args = {
//   label: "Click Me",
// };
