import Input from '../index';
import Button from '../../Button';

export default ((args, { argTypes }) => ({
  components: { Input, Button },
  props: Object.keys(argTypes),
  template: `<Input v-bind="args" :value="args.modelValue" />`,
  data: () => ({ args }),
})).bind({});
