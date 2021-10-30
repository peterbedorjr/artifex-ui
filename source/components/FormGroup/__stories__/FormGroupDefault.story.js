import FormGroup from '../index';
import Input from '../../Input';

export default ((args, { argTypes }) => ({
  components: { FormGroup, Input },
  props: Object.keys(argTypes),
  template: `<FormGroup v-bind="args"><Input v-model="args.modelValue"></FormGroup>`,
  data: () => ({ args }),
})).bind({});
