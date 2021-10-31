import Select from '../index';

export default ((args, { argTypes }) => ({
  components: { Select },
  props: Object.keys(argTypes),
  template: `<Select v-bind="args" />`,
  data: () => ({ args }),
})).bind({});
