const hexToR = (h) => parseInt(cutHex(h).substring(0, 2), 16);
const hexToG = (h) => parseInt(cutHex(h).substring(2, 4), 16);
const hexToB = (h) => parseInt(cutHex(h).substring(4, 6), 16);
const cutHex = (h) => (h.charAt(0) == "#" ? h.substring(1, 7) : h);

module.exports = (hex) => {
  const threshold = 130;

  if (cutHex(hex).length === 3) {
    hex = hex.split('').map((h) => `${h}${h}`).join('');
  }

  let hRed = hexToR(hex);
  let hGreen = hexToG(hex);
  let hBlue = hexToB(hex);

  const cBrightness = (hRed * 299 + hGreen * 587 + hBlue * 114) / 1000;

  return (cBrightness > threshold)
    ? '#000000'
    : '#ffffff';
};
