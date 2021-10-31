import './index.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  () => ({
    template: `
      <div class="w-60">
        <story />
      </div>
    `,
  }),
];
