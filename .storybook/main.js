module.exports = {
    stories: [
        // '../stories/**/*.stories.mdx',
        '../source/**/*.stories.@(js|jsx|ts|tsx)'
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-postcss',
        '@storybook/addon-storysource',
    ]
}
