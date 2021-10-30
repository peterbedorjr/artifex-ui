import Tooltip from '../index';

export default ((args, { argTypes }) => ({
  components: { Tooltip },
  props: Object.keys(argTypes),
  template: `
    <Tooltip v-bind="args">
      ${args.default}
      <template #tooltip>${args.tooltip}</template>
    </Tooltip>
  `,
  data: () => ({ args }),
})).bind({});
