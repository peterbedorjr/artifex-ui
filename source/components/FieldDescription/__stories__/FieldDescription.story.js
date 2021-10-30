import FieldDescription from '../index';

export default ((args, { argTypes }) => ({
  components: { FieldDescription },
  props: Object.keys(argTypes),
  template: `<FieldDescription v-bind="args">${args.default}</Label>`,
  data: () => ({ args }),
})).bind({});
