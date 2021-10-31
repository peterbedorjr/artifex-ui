<script>
import { h } from 'vue';

import Label from '../Label';
import FieldDescription from '../FieldDescription';
import InputErrors from '../InputErrors';
import Tooltip from '../Tooltip';

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
    Tooltip,
  },
  props: {
    variant: variant([...variants, 'primary']), // TODO: Simplify color constants
    borderRadius: borderRadius(borderRadii),
    label: {
      type: String,
      default: '',
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
    split: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return [
        this.split ? '-split' : null,
      ];
    },
    labelClasses() {
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
    mapSlotNode(vnode, i, total) {
      const classes = ['mb-2'];

      if (i < (total - 1)) {
        classes.push('mr-2');
      }

      return h(vnode, {
        class: classes,
        ...this.$attrs,
        ...this.props,
        ...this.$props,
        ...vnode.props,
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
          class: this.labelClasses,
          for: this.name,
        }, {
          default: () => {
            return this.label;
          }
        })
      );
    }

    if (this.description) {
      children.push(
        h(FieldDescription, {
          variant: this.variant,
          class: 'mb-1.5',
          id: `${this.name}-desc`,
        }, {
          default: () => {
            return [
              h('div', {
                class: 'flex justify-between w-full items-center',
              }, [this.description])
            ];
          },
        })
      );
    }

    if (Object.keys(this.$slots).length) {
      const slots = this.$slots.default()
        .filter((node) => node.__v_isVNode);
        
      children = [
        ...children,
        h('div', {
          class: ['form-group__inputs', this.classes],
        }, slots.map((slot, i) => this.mapSlotNode(slot, i, slots.length))),
      ];
    }

    if (this.errors && this.errors.length) {
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
      { class: 'form-group' },
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
.form-group__inputs.-split {
  @apply flex;
}
</style>
