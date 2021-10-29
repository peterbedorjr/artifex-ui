const config = require('../../tailwind.config');
const theme = config.theme.extend.colors;

const colors = [];

Object.keys(theme).forEach((variant) => {
  if (typeof theme[variant] !== 'string') {
    colors.push({ name: variant, colors: Object.values(theme[variant])});
  }
});

export default colors;

// Object.keys(theme).forEach((name) => {
//   if (typeof theme[name] !== 'string') {
//     Object.keys(theme[name]).forEach((variant) => {
//       colors.push({
//         name: `${name}:${variant.toLowerCase()}`,
//         textColor: contrast(theme[name][variant]),
//         color: theme[name][variant],
//       });
//     });
//   }
// });

// Object.keys(theme).forEach((name) => {
//   if (typeof theme[name] === 'string') {
//     colors.push({ name, textColor: contrast(theme[name]), color: theme[name] });
//   }
// });

// export default colors;
