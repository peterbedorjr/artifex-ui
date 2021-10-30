import FormGroup from '../index';
import validationColors from '../../../constants/validation-colors';
import borderRadii from '../../../constants/border-radii';
export { default as Default } from './FormGroupDefault.story';

export default {
  title: 'Components/FormGroup',
  component: FormGroup,
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
    input: {
      control: 'select',
      options: ['Text'],
    }
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
    input: 'Text',
  },
  parameters:{
    layout: 'centered',
  },
};
