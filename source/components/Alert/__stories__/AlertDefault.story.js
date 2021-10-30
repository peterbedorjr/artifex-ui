import Alert from '../index';

export default ((args, { argTypes }) => ({
  components: { Alert },
  props: Object.keys(argTypes),
  template: `
    <Alert v-bind="args">
      ${args.default}
    </Alert>
  `,
  data: () => ({ args }),
})).bind({});
