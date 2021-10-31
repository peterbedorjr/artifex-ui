import Card from '../index';
import Button from '../../Button';

export default ((args, { argTypes }) => ({
  components: { Card, Button },
  props: Object.keys(argTypes),
  template: `<Card v-bind="args">${args.default}</Card>`,
  data: () => ({ args }),
})).bind({});
