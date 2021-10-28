import Icon from '../index';

export default ((args, { argTypes }) => ({
  components: { Icon },
  props: Object.keys(argTypes),
  template: `<Icon v-bind="args" />`,
  data: () => ({ args }),
})).bind({});
