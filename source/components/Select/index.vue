<template>
  <select
    :class="classes"
    :value="modelValue"
    :name="name"
    :id="id || name"
    @input="$emit('update:modelValue', $event.target.value)"
    v-bind="$attrs"
  >
    <option value="" disabled selected v-if="placeholder">{{ placeholder }}</option>
    <option
      v-for="(option, i) in options"
      :value="option.value"
      :key="i"
    >
      {{ option.label }}
    </option>
  </select>
</template>

<script>
import inputProps from '../../props/input';

export default {
  name: 'Select',
  props: {
    ...inputProps(),
    options: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    classes() {
      return [
        this.size ? `-${this.size}` : null,
        this.variant ? `-${this.variant}` : null,
        this.borderRadius ? `-rounded-${this.borderRadius}` : null,
        'select'
      ];
    },
  },
};
</script>

<style scoped>
/* Base */
.select {
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
.select.-small {
  @apply py-1 px-2 text-xs;
}
.select.-large {
  @apply py-3 px-4 text-xl;
}

/* Colors */
.select.-primary {
  @apply focus:ring-primary focus:border-primary focus:ring-opacity-50;
}
.select.-secondary {
  @apply text-secondary focus:ring-secondary focus:border-secondary border-secondary focus:ring-opacity-50;
}
.select.-success {
  @apply text-success focus:ring-success focus:border-success border-success focus:ring-opacity-50;
}
.select.-danger {
  @apply text-danger focus:ring-danger focus:border-danger border-danger focus:ring-opacity-50;
}
.select.-warning {
  @apply text-warning focus:ring-warning focus:border-warning border-warning focus:ring-opacity-50;
}
.select.-info {
  @apply text-info focus:ring-info focus:border-info border-info focus:ring-opacity-50;
}

/* States */
.select:disabled {
  @apply cursor-not-allowed;
}

/* Border radius */
.select.-rounded-small {
  @apply rounded-sm;
}
.select.-rounded-normal {
  @apply rounded-md;
}
.select.-rounded-large {
  @apply rounded-lg;
}
.select.-rounded-full {
  @apply rounded-full;
}
.select.-rounded-left-small {
  @apply rounded-l-sm;
}
.select.-rounded-left-normal {
  @apply rounded-l-md;
}
.select.-rounded-left-large {
  @apply rounded-l-lg;
}
.select.-rounded-left-full {
  @apply rounded-l-full;
}
.select.-rounded-right-small {
  @apply rounded-r-sm;
}
.select.-rounded-right-normal {
  @apply rounded-r-md;
}
.select.-rounded-right-large {
  @apply rounded-r-lg;
}
.select.-rounded-right-full {
  @apply rounded-r-full;
}
.select.-rounded-top-small {
  @apply rounded-t-sm;
}
.select.-rounded-top-normal {
  @apply rounded-t-md;
}
.select.-rounded-top-large {
  @apply rounded-t-lg;
}
.select.-rounded-top-full {
  @apply rounded-t-full;
}
.select.-rounded-bottom-small {
  @apply rounded-b-sm;
}
.select.-rounded-bottom-normal {
  @apply rounded-b-md;
}
.select.-rounded-bottom-large {
  @apply rounded-b-lg;
}
.select.-rounded-bottom-full {
  @apply rounded-b-full;
}
</style>
