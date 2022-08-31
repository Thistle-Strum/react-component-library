import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import "tailwindcss/tailwind.css";

import HeatMap1 from "./HeatMap1";

export default {
  title: "ReactComponentLibrary/HeatMap1",
  component: HeatMap1,
} as ComponentMeta<typeof HeatMap1>;

const Template: ComponentStory<typeof HeatMap1> = (...args) => <HeatMap1 />;

export const HeatMap1Example = Template.bind({});

HeatMap1Example.args = {};
