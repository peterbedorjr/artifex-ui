import oneOf from '../validators/one-of';

export default (sizes) => {
  return {
    type: [String, null],
    default: null,
    validator: (val) => oneOf(val, [null, ...sizes]),
  }
};
