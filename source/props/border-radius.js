import oneOf from '../validators/one-of';
import borderRadii from '../constants/border-radii';

export default (radii = [], def = 'normal') => ({
  type: String,
  default: def,
  validator: (val) => oneOf(val, [...radii, ...borderRadii]),
});
