<template>
  <label :class="classes">
    <slot />
  </label>
</template>

<script>
import variant from '../../props/variant';
import variants from '../../constants/variants';

export default {
  name: 'Label',
  props: {
    variant: variant(variants, null),
    required: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return [
        'label',
        this.variant ? `-${this.variant}` : null,
        this.required ? '-required' : null,
      ];
    },
  },
};
</script>

<style scoped>
.label {
  @apply block text-sm font-medium;
}
.label.-secondary {
  @apply text-secondary;
}
.label.-info {
  @apply text-info;
}
.label.-success {
  @apply text-success;
}
.label.-warning {
  @apply text-warning;
}
.label.-danger {
  @apply text-danger;
}
.label.-required::after {
  @apply inline-block ml-1 text-danger;

  content: '*';
}
</style>
