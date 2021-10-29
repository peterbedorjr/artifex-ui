<template>
   <input
    :type="type"
    :class="classes"
  />
</template>

<script>
import size from '../../props/size';
import variant from '../../props/variant';
import sizes from '../../constants/input-sizes';
import variants from '../../constants/input-variants';

export default {
  name: 'Input',
  props: {
    size: size(sizes),
    variant: variant(variants),
  },
  computed: {
    classes() {
      return [
        this.size ? `-${this.size}` : null,
        this.variant ? `-${this.variant}` : null,
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
  @apply focus:ring-secondary focus:border-secondary focus:ring-opacity-50;
}
.input.-success {
  @apply focus:ring-success focus:border-success focus:ring-opacity-50;
}
.input.-danger {
  @apply focus:ring-danger focus:border-danger focus:ring-opacity-50;
}
.input.-warning {
@apply focus:ring-warning focus:border-warning focus:ring-opacity-50;
}
.input.-info {
@apply focus:ring-info focus:border-info focus:ring-opacity-50;
}
</style>
