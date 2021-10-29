import oneOf from '../validators/one-of';

export default (variants) => ({
  type: String,
  default: 'primary',
  validator: (val) => oneOf(val, variants),
});
