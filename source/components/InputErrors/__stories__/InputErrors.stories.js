import InputErrors from '../index';
export { default as Default } from './InputErrorsDefault.story';

export default {
  title: 'Components/Forms/InputErrors',
  component: InputErrors,
  argTypes: {
    errors: {
      control: 'array',
      description: 'The errors',
    },
  },
  args: {
    errors: [
      'This is an error',
      'This is also an error',
    ],
  },
  parameters:{
    layout: 'centered',
  },
};
