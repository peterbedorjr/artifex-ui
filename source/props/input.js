import size from './size';
import variant from './variant';
import borderRadius from './border-radius';
import sizes from '../constants/input-sizes';
import variants from '../constants/input-variants';
import borderRadii from '../constants/border-radii';

export default () => ({
  size: size(sizes),
  variant: variant(variants),
  borderRadius: borderRadius(borderRadii),
  type: {
    type: [String, Number],
    default: 'text',
  },
  modelValue: {
    type: [String, Number],
    default: '',
  },
  name: {
    type: String,
  },
  id: {
    type: String,
  },
  placeholder: {
    type: String,
  },
});
