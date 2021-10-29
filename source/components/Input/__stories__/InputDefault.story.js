import Input from '../index';

export default ((args, { argTypes }) => ({
  components: { Input },
  props: Object.keys(argTypes),
  template: `<Input v-bind="args" />`,
  data: () => ({ args }),
})).bind({});
