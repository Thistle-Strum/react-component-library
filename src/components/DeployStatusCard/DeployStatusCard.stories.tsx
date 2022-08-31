import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import 'tailwindcss/tailwind.css';

import { DeployStatusCard } from './DeployStatusCard';

const deployArray = [
  { timestamp: 'Aug 30, 2022 5:45:02 PM' },
  {
    deployHash:
      '28b4fbf167b51213ff84663eea0b6075a447e85c22c63c36f9378c418f19a2b0',
  },
];

export default {
  title: 'ReactComponentLibrary/DeployStatusCard',
  component: DeployStatusCard,
} as ComponentMeta<typeof DeployStatusCard>;

const Template: ComponentStory<typeof DeployStatusCard> = (...args) => (
  <DeployStatusCard deployInformation={deployArray as any} /> // we should see if we can't get this information as an object over an array
);

export const DeployStatusCardExample = Template.bind({});

DeployStatusCardExample.args = {};
