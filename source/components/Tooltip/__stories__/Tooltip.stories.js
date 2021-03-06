import Tooltip from '../index';
import positions from '../../../constants/tooltip-positions';

export { default as Default } from './TooltipDefault.story';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  argTypes: {
    placement: {
      control: 'inline-radio',
      options: positions,
    },
    default: {
      control: 'text',
    },
    tooltip: {
      control: 'text',
    },
  },
  args: {
    placement: 'top',
    default: 'Test',
    tooltip: 'This is a tooltip',
  },
  parameters:{
    layout: 'centered',
  },
};
