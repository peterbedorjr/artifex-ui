<template>
  <input
    :type="type"
    :class="classes"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    v-bind="{ ...$attrs, ...$props }"
  />
</template>

<script>
import size from '../../props/size';
import variant from '../../props/variant';
import sizes from '../../constants/input-sizes';
import variants from '../../constants/input-variants';
import borderRadii from '../../constants/border-radii';
import borderRadius from '../../props/border-radius';

export default {
  name: 'Input',
  inheritAttrs: false,
  props: {
    size: size(sizes),
    variant: variant(variants),
    borderRadius: borderRadius(borderRadii),
    type: {
      type: [String, Number],
      default: 'text',
    },
  },
  computed: {
    classes() {
      return [
        this.size ? `-${this.size}` : null,
        this.variant ? `-${this.variant}` : null,
        this.borderRadius ? `-rounded-${this.borderRadius}` : null,
        'input'
      ];
    },
  },
};
</script>

<style scoped>
/* Base */
.input {
  @apply
  bg-white
    shadow
    appearance-none
    rounded
    w-full
    py-2
    px-3
    leading-tight
    focus:outline-none
    border-gray-400
    disabled:text-gray-400
    disabled:bg-gray-100
    disabled:border-gray-300
    focus:ring-2
    focus:ring-opacity-50;
}

/* Sizes */
.input.-small {
  @apply py-1 px-2 text-xs;
}
.input.-large {
  @apply py-3 px-4 text-xl;
}

/* Colors */
.input.-primary {
  @apply focus:ring-primary focus:border-primary focus:ring-opacity-50;
}
.input.-secondary {
  @apply text-secondary focus:ring-secondary focus:border-secondary border-secondary focus:ring-opacity-50;
}
.input.-success {
  @apply text-success focus:ring-success focus:border-success border-success focus:ring-opacity-50;
}
.input.-danger {
  @apply text-danger focus:ring-danger focus:border-danger border-danger focus:ring-opacity-50;
}
.input.-warning {
  @apply text-warning focus:ring-warning focus:border-warning border-warning focus:ring-opacity-50;
}
.input.-info {
  @apply text-info focus:ring-info focus:border-info border-info focus:ring-opacity-50;
}

/* States */
.input:disabled {
  @apply cursor-not-allowed;
}

/* Border radius */
.input.-rounded-small {
  @apply rounded-sm;
}
.input.-rounded-normal {
  @apply rounded-md;
}
.input.-rounded-large {
  @apply rounded-lg;
}
.input.-rounded-full {
  @apply rounded-full;
}
.input.-rounded-left-small {
  @apply rounded-l-sm;
}
.input.-rounded-left-normal {
  @apply rounded-l-md;
}
.input.-rounded-left-large {
  @apply rounded-l-lg;
}
.input.-rounded-left-full {
  @apply rounded-l-full;
}
.input.-rounded-right-small {
  @apply rounded-r-sm;
}
.input.-rounded-right-normal {
  @apply rounded-r-md;
}
.input.-rounded-right-large {
  @apply rounded-r-lg;
}
.input.-rounded-right-full {
  @apply rounded-r-full;
}
.input.-rounded-top-small {
  @apply rounded-t-sm;
}
.input.-rounded-top-normal {
  @apply rounded-t-md;
}
.input.-rounded-top-large {
  @apply rounded-t-lg;
}
.input.-rounded-top-full {
  @apply rounded-t-full;
}
.input.-rounded-bottom-small {
  @apply rounded-b-sm;
}
.input.-rounded-bottom-normal {
  @apply rounded-b-md;
}
.input.-rounded-bottom-large {
  @apply rounded-b-lg;
}
.input.-rounded-bottom-full {
  @apply rounded-b-full;
}
</style>
