import type { Preview } from "@storybook/react";

import { withThemeByClassName } from "@storybook/addon-styling";

import "@/app/globals.css";
import { caveat, fraunces, inter } from "@/lib/fonts";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
    withThemeByClassName({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
    (Story) => (
      <div
        className={`${inter.variable} ${caveat.variable} ${fraunces.variable} antialiased font-sans dark:text-gray-200 text-gray-800`}
      >
        <Story />
      </div>
    ),
  ],
};

export default preview;
