import TextField from '../index';
import validationColors from '../../../constants/validation-colors';
import borderRadii from '../../../constants/border-radii';
export { default as Default } from './TextFieldDefault.story';

export default {
  title: 'Components/TextField',
  component: TextField,
  argTypes: {
    label: {
      control: 'text',
    },
    modelValue: {
      control: 'text',
    },
    variant: {
      control: 'select',
      options: validationColors,
      defaultValue: '',
    },
    borderRadius: {
      control: 'select',
      options: borderRadii,
      defaultValue: '',
    },
  },
  args: {
    label: 'Label',
    modelValue: 'value',
    borderRadius: 'normal',
    variant: '',
  },
  parameters: {
    layout: 'centered',
  },
};
