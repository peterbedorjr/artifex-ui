import ButtonGroup from '../index';
import Button from '../../Button';

export default ((args, { argTypes }) => ({
  components: { ButtonGroup, Button },
  props: Object.keys(argTypes),
  template: `
    <ButtonGroup v-bind="args">
      <Button variant="success">Left</Button>
      <Button variant="info">Middle</Button>
      <Button variant="danger">Right</Button>
    </ButtonGroup>
  `,
  data: () => ({ args }),
})).bind({});
