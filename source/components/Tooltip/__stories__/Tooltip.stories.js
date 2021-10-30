import Tooltip from '../index';
import positions from '../../../constants/tooltip-positions';

export { default as Default } from './TooltipDefault.story';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  argTypes: {
    placement: {
      control: 'select',
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
    tooltip: 'Test',
  },
  parameters:{
    layout: 'centered',
  },
};
