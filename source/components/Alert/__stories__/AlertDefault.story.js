import { action } from '@storybook/addon-actions';
import Alert from '../index';

export default ((args, { argTypes }) => ({
  components: { Alert },
  props: Object.keys(argTypes),
  template: `
    <Alert v-bind="args" @close="close">
      ${args.default}
    </Alert>
  `,
  data: () => ({ 
    args,
    close: action('close'),
  }),
})).bind({});
