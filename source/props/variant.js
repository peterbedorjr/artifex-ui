import oneOf from '../validators/one-of';

export default (variants, def = 'primary') => ({
  type: String,
  default: def,
  validator: (val) => oneOf(val, variants),
});
