<template>
  <div class="checkbox">
    <input
      v-bind="$attrs"
      :class="inputClasses"
      type="checkbox"
      :id="id || name"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    >
    <label
      :class="labelClasses"
      :for="id || name"
      v-if="$slots.default"
    >
      <slot />
    </label>
  </div>
</template>

<script>
import inputProps from '../../props/input';

export default {
  name: 'Checkbox',
  inheritAttrs: false,
  props: inputProps(),
  computed: {
    inputClasses() {
      return [
        this.size ? `-${this.size}` : null,
        this.variant ? `-${this.variant}` : null,
        this.borderRadius ? `-rounded-${this.borderRadius}` : null,
        this.$slots.default ? 'mr-2' : null,
        'checkbox__input',
      ];
    },
    labelClasses() {
      return [
        this.$attrs.disabled ? '-disabled' : null,
        'checkbox__label',
      ];
    },
  }
};
</script>

<style scoped>
/* Basw */
.checkbox {
  @apply flex items-center;
}
.checkbox__label.-disabled {
  @apply text-gray-400 cursor-not-allowed;
}
.checkbox__input {
  @apply
    shadow
    rounded
    border-gray-400
    disabled:text-gray-400
    disabled:bg-gray-100
    disabled:border-gray-300
    focus:outline-none
    ring-offset-0
    focus:ring-2
    focus:ring-opacity-50;
}

/* Colors */
.checkbox__input.-primary {
  @apply focus:ring-primary focus:border-primary checked:bg-primary checked:border-primary focus:ring-opacity-50;
}
.checkbox__input.-secondary {
  @apply text-secondary focus:ring-secondary focus:border-secondary border-secondary checked:border-secondary focus:ring-opacity-50;
}
.checkbox__input.-success {
  @apply text-success focus:ring-success focus:border-success border-success checked:border-success focus:ring-opacity-50;
}
.checkbox__input.-danger {
  @apply text-danger focus:ring-danger focus:border-danger border-danger checked:border-danger focus:ring-opacity-50;
}
.checkbox__input.-warning {
  @apply text-warning focus:ring-warning focus:border-warning border-warning checked:border-warning focus:ring-opacity-50;
}
.checkbox__input.-info {
  @apply text-info focus:ring-info focus:border-info border-info checked:border-info focus:ring-opacity-50;
}

/* States */
.checkbox__input:disabled {
  @apply cursor-not-allowed border-gray-400 shadow-none;
}
</style>
