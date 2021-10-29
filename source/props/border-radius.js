import oneOf from '../validators/one-of';

export default (radii, def = 'normal') => ({
  type: String,
  default: def,
  validator: (val) => oneOf(val, radii),
});
