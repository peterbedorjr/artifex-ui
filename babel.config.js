module.exports = {
  presets: [
    [
      '@vue/cli-plugin-babel/preset',
      {
        loose: true,
        shippedProposals: true,
      },
    ],
  ],
  plugins: [
    ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
  ]
};
