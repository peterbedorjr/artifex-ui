import TextField from '../index';

export default ((args, { argTypes }) => ({
  components: { TextField },
  props: Object.keys(argTypes),
  template: `<TextField v-bind="args" :value="args.modelValue" />`,
  data: () => ({ args }),
})).bind({});
