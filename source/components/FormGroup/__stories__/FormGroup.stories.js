import FormGroup from '../index';

import validationColors from '../../../constants/validation-colors';
import borderRadii from '../../../constants/border-radii';

export { default as Default } from './FormGroupDefault.story';
export { default as Mulitple } from './FormGroupMultiple.story';

export default {
  title: 'Components/Forms/FormGroup',
  component: FormGroup,
  argTypes: {
    label: {
      control: 'text',
    },
    modelValue: {
      control: 'text',
    },
    modelValue2: {
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
    inline: {
      control: 'boolean',
      defaultValue: false,
    },
  },
  args: {
    label: 'Name',
    modelValue: 'Jean-Luc',
    modelValue2: 'Picard',
    borderRadius: 'normal',
    variant: 'primary',
    inline: false,
    description: 'The captain of the starship Enterprise',
    errors: [
      'This is an error message',
      'This is another error message',
    ],
    name: 'name',
  },
  parameters:{
    layout: 'centered',
  },
};
