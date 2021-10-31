<template>
  <svg
    v-if="icon"
    :class="classes"
    xmlns="http://www.w3.org/2000/svg"
    :width="internalSize.width"
    :height="internalSize.height"
    viewBox="0 0 24 24"
    stroke-linecap="round"
    stroke-linejoin="round"
    v-html="require(`!./../../icons/${icon}.js`)"
  />
</template>

<script>
import oneOf from '../../validators/one-of';
import iconSizes from '../../constants/icon-sizes';
import colors from '../../constants/colors';

export default {
  name: 'Icon',
  props: {
    icon: {
      type: String,
    },
    size: {
      type: String,
      default: 'normal',
      validator: (val) => oneOf(val, iconSizes),
    },
    width: {
      type: Number,
      default: 24,
    },
    height: {
      type: Number,
      default: 24,
    },
    color: {
      type: String,
      validator: (val) => oneOf(val, colors),
    },
  },
  computed: {
    classes() {
      const classes = ['icon'];

      if (this.color) {
        classes.push(`-${this.color}`);
      }

      return classes;
    },
    internalSize() {
      const map = {
        xsmall: { width: 14, height: 14 },
        small: { width: 14, height: 14 },
        normal: { width: this.width, height: this.height },
        large: { width: 32, height: 32 },
        xlarge: { width: 48, height: 48 },
      };

      if (map[this.size]) {
        return map[this.size];
      }

      return { width: 24, height: 24 };
    },
  },
};
</script>

<style scoped>
.icon.-primary {
  @apply fill-primary-darker;
}
.icon.-secondary {
  @apply fill-secondary-darker;
}
.icon.-info {
  @apply fill-info-darker;
}
.icon.-success {
  @apply fill-success-darker;
}
.icon.-warning {
  @apply fill-warning-darker;
}
.icon.-danger {
  @apply fill-danger-darker;
}
.icon.-black {
  @apply fill-black;
}
.icon.-white {
  @apply fill-white;
}
</style>

