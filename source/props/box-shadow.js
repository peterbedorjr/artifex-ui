import oneOf from '../validators/one-of';
import boxShadows from '../constants/box-shadows';

export default (shadows = [], def = 'normal') => ({
  type: String,
  default: def,
  validator: (val) => oneOf(val, [...shadows, ...boxShadows]),
});
