<template>
  <span :class="classes">
    <slot />
  </span>
</template>

<script>
import variant from '../../props/variant';
import colors from '../../constants/colors';

export default {
  name: 'Badge',
  props: {
    variant: variant(colors),
    pill: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return [
        'badge',
        this.pill ? '-pill' : null,
        this.variant ? `-${this.variant}` : null,
      ];
    }
  }
};
</script>

<style scoped>
.badge {
  @apply px-2 py-1 rounded text-sm font-semibold;
}
.badge.-pill {
  @apply rounded-full;
}

/* Colors */
.badge.-primary {
  @apply bg-primary text-white;
}
.badge.-secondary {
  @apply bg-secondary text-white;
}
.badge.-info {
  @apply bg-info text-white;
}
.badge.-warning {
  @apply bg-warning text-black;
}
.badge.-danger {
  @apply bg-danger text-white;
}
.badge.-success {
  @apply bg-success text-white;
}
.badge.-black {
  @apply bg-black text-white;
}
.badge.-white {
  @apply bg-white text-black;
}
</style>
