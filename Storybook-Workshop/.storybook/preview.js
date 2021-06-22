
import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
setCompodocJson(docJson);

// By default Storybook renders the stories in iframe, with this we tell Storybook to render our stories as inline stories. But it was not working :)
// import { addParameters } from '@storybook/angular';
//
// addParameters({
//   docs: {
//     inlineStories: true,
//   },
// });

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    values: [
      { name: 'red', value: '#f00' },
      { name: 'green', value: '#0f0' },
    ],
  },
  // This will change the position of the story: centered, padded or fullscreen
  // layout: 'centered',
  // a11y: {
  //   config: {
  //     rules: [
  //       {
  //         // To disable a rule across all stories, set `enabled` to `false`.
  //         // Use with caution: all violations of this rule will be ignored!
  //         id: 'autocomplete-valid',
  //         enabled: false,
  //       },
  //     ],
  //   },
  // },
}
