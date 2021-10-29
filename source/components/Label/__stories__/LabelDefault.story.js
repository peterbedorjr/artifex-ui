import Label from '../index';

export default ((args, { argTypes }) => ({
  components: { Label },
  props: Object.keys(argTypes),
  template: `<Label v-bind="args">${args.default}</Label>`,
  data: () => ({ args }),
})).bind({});
