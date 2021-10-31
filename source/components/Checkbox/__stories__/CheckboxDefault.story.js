import Checkbox from '../index';

export default ((args, { argTypes }) => ({
  components: { Checkbox },
  props: Object.keys(argTypes),
  template: `<Checkbox v-bind="args" :value="args.modelValue" name="checkbox">${args.default}</Checkbox>`,
  data: () => ({ args }),
})).bind({});
