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
    description: {
      control: 'text',
    },
    errors: {
      control: 'array',
    },
    name: {
      control: 'text',
      defaultValue: 'name',
    },
  },
  args: {
    label: 'Label',
    modelValue: 'value',
    borderRadius: 'normal',
    variant: 'primary',
    description: 'This is a field description',
    errors: [
      'This is an error message',
      'This is another error message',
    ],
    name: 'name',
  },
  parameters: {
    layout: 'centered',
  },
};
