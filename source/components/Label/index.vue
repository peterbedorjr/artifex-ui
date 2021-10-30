<template>
  <label :class="classes" :for="forInput">
    <slot />
    <span v-if="required" class="label__required-indicator">*</span>
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
    forInput: {
      type: String,
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
  @apply block text-sm font-medium uppercase;
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
.label__required-indicator {
  @apply inline-block ml-1 text-danger;
}
</style>
