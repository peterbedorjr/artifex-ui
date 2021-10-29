import Label from '../index';
import variants from '../../../constants/variants';
export { default as Default } from './LabelDefault.story';

export default {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    default: {
      control: 'text',
      description: 'Slot content',
      defaultValue: 'Label'
    },
    variant: {
      control: 'select',
      options: variants,
    },
    required: {
      control: 'boolean',
      defaultValue: false,
    },
  },
  args: {
    default: 'Label',
  },
  parameters:{
    layout: 'centered',
    required: false,
  },
};
