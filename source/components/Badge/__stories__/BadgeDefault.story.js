import Badge from '../index';

export default ((args, { argTypes }) => ({
  components: { Badge },
  props: Object.keys(argTypes),
  template: `<Badge v-bind="args">${args.default}</Badge>`,
  data: () => ({ args }),
})).bind({});
