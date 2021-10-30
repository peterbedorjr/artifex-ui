import FieldDescription from '../index';
export { default as Default } from './FieldDescription.story';

export default {
  title: 'Components/FieldDescription',
  component: FieldDescription,
  argTypes: {
    default: {
      control: 'text',
      description: 'Slot content',
      defaultValue: 'Label'
    },
  },
  args: {
    default: 'This is a place for a description of the field',
  },
  parameters:{
    layout: 'centered',
  },
};
