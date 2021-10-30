<script>
import { h } from 'vue';

import Label from '../Label';
import FieldDescription from '../FieldDescription';
import InputErrors from '../InputErrors';

import variant from '../../props/variant';

import variants from '../../constants/validation-colors';
import borderRadii from '../../constants/border-radii';
import borderRadius from '../../props/border-radius';

export default {
  name: 'FormGroup',
  components: {
    FieldDescription,
    InputErrors,
    Label,
  },
  props: {
    variant: variant([...variants, 'primary']), // TODO: Simplify color constants
    borderRadius: borderRadius(borderRadii),
    label: {
      type: String,
      default: '',
    },
    modelValue: {
      type: [String, Number],
    },
    description: {
      type: String,
    },
    name: {
      type: String,
    },
    errors: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    classes() {
      return [
        'label',
        this.description ? '-description' : null,
      ];
    },
    props() {
      const props = {};

      if (this.description) {
        props['aria-describedby'] = `${this.name}-desc`;
      }

      return props;
    },
  },
  methods: {
    mapSlotNode(vnode) {
      return h(vnode, {
        class: 'mb-1.5',
        ...this.$attrs,
        ...this.props,
        ...this.$props,
        id: this.name,
      });
    },
  },
  render() {
    let children = [];

    if (this.label) {
      children.push(
        h(Label, {
          variant: this.variant,
          class: this.classes,
          for: this.name,
          innerText: this.label,
        })
      );
    }

    if (this.description) {
      children.push(
        h(FieldDescription, {
          variant: this.variant,
          class: 'mb-1.5',
          id: `${this.name}-desc`,
          innerText: this.description,
        })
      );
    }

    const slots = this.$slots.default()
      .filter((node) => node.__v_isVNode)
      .map(this.mapSlotNode.bind(this));

    children = [
      ...children,
      ...slots,
    ];

    if (this.errors.length) {
      children.push(
        h(InputErrors, {
          variant: this.variant,
          class: 'mb-1.5',
          errors: this.errors,
        })
      );
    }

    return h(
      'div',
      { class: this.classes },
      children,
    );
  }
}
</script>

<style scoped>
.label {
  @apply mb-1.5;
}
.label.-description {
  @apply mb-0.5;
}
</style>
