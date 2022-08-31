import React from 'react';

export interface CheckboxProps {
  readonly label: string;
}

export const Checkbox: React.VFC<CheckboxProps> = ({ label }) => {
  return <div>{label}</div>;
};
