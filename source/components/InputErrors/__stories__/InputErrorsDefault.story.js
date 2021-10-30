import InputErrors from '../index';

export default ((args, { argTypes }) => ({
  components: { InputErrors },
  props: Object.keys(argTypes),
  template: `<InputErrors v-bind="args" />`,
  data: () => ({ args }),
})).bind({});
