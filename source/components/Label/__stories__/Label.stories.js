import Label from '../index';
import variants from '../../../constants/variants';
export { default as Default } from './LabelDefault.story';

export default {
  title: 'Components/Forms/Label',
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
    forInput: {
      control: 'string',
      defaultValue: 'test',
    },
  },
  args: {
    default: 'Label',
    forInput: 'test',
  },
  parameters:{
    layout: 'centered',
  },
};
