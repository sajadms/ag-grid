import { select } from "@storybook/addon-knobs";

export const themeKnob = () =>
  select(
    "Theme",
    {
      Alpine: "ag-theme-alpine",
      "Alpine Dark": "ag-theme-alpine-dark"
    },
    "ag-theme-alpine"
  );
