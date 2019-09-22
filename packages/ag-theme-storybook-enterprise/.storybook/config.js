import { configure } from "@storybook/react";
// import theme from "./theme";

// addParameters({
//   options: {
//     theme: theme
//   }
// });

// automatically import all files ending in *.stories.js
configure(require.context("../stories", true, /\.stories\.js$/), module);
