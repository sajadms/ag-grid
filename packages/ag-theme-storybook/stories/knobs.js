import { select } from "@storybook/addon-knobs";

export const themeKnob = () =>
  select(
    "Theme",
    {
      Alpine: "ag-theme-alpine",
      "Alpine Dark": "ag-theme-alpine-dark"
    },
    "ag-theme-alpine-dark"
  );

// This had to be a knob, but it does not work, so I am hard-coding it
export const rtlKnob = () => true;
