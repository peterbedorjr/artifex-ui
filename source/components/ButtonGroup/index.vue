<script>
import { h } from 'vue';
import borderRadii from '../../constants/border-radii';
import oneOf from '../../validators/one-of';

export default {
  name: 'ButtonGroup',
  props: {
    borderRadius: {
      type: String,
      default: 'normal',
      validator: (val) => oneOf(val, borderRadii),
    },
  },
  computed: {
    classes() {
      return ['button-group'];
    },
  },
  methods: {
    mapSlotNode(vnode, i, total) {
      if (total === 1) {
        return vnode;
      }

      if (i === 0) {
        vnode.props = {
          ...vnode.props,
          'border-radius': `left-${this.borderRadius}`,
        }
      } else if (i === (total - 1)) {
        vnode.props = {
          ...vnode.props,
          'border-radius': `right-${this.borderRadius}`,
        }
      } else {
        vnode.props = {
          ...vnode.props,
          'border-radius': 'none',
        }
      }

      return vnode;
    }
  },
  render() {
    const children = this.$slots.default
      ? this.$slots.default()
      : [];

    return h(
      'div',
      {
        class: this.classes,
      },
      children.map((vnode, index) => {
        return this.mapSlotNode(vnode, index, children.length);
      }),
    );
  },
};
</script>

<style scoped>
.button-group {
  @apply flex;
}
</style>