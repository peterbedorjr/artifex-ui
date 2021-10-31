import ButtonGroup from '../index';
import Button from '../../Button';

export default ((args, { argTypes }) => ({
  components: { ButtonGroup, Button },
  props: Object.keys(argTypes),
  template: `
    <ButtonGroup v-bind="args">
      <Button variant="success" icon="info">Left</Button>
      <Button variant="info" :loading="true">Middle</Button>
      <Button variant="danger">Right</Button>
    </ButtonGroup>
  `,
  data: () => ({ args }),
})).bind({});
