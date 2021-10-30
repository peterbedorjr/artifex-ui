import FormGroup from '../index';
import Input from '../../Input';

export default ((args, { argTypes }) => ({
  components: { FormGroup, Input },
  props: Object.keys(argTypes),
  template: `
    <FormGroup v-bind="args">
      <Input v-model="args.modelValue" placeholder="First name" />
      <Input v-model="args.modelValue2" placeholder="Last name" />
    </FormGroup>
  `,
  data: () => ({ args }),
})).bind({});
