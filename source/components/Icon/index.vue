<template>
  <svg
    v-if="icon"
    :class="classes"
    xmlns="http://www.w3.org/2000/svg"
    :width="internalSize.width"
    :height="internalSize.height"
    viewBox="0 0 24 24"
    fill="none"
    :stroke-width="strokeWidth"
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
    strokeWidth: {
      type: Number,
      default: 1,
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
    }
  },
  computed: {
    classes() {
      const classes = ['icon'];

      if (this.color)
      return ['icon', `-${this.color}`];
    },
    internalSize() {
      switch (this.size) {
        case 'xsmall': {
          return { width: 14, height: 14 };
        }

        case 'small': {
          return { width: 18, height: 18 };
        }

        case 'normal': {
          return { width: this.width, height: this.height };
        }

        case 'large': {
          return { width: 32, height: 32 };
        }

        case 'xlarge': {
          return { width: 48, height: 48 };
        }

        default: {
          return { width: 24, height: 24 };
        }
      }
    },
  },
};
</script>

<style scoped>
.icon {
  /* TODO: stroke-current doesn't work for some reason, investigate later maybe */
  stroke: currentColor;
}
.icon.-primary {
  @apply stroke-primary;
}
.icon.-secondary {
  @apply stroke-secondary;
}
.icon.-info {
  @apply stroke-info;
}
.icon.-success {
  @apply stroke-success;
}
.icon.-warning {
  @apply stroke-warning;
}
.icon.-danger {
  @apply stroke-danger;
}
.icon.-black {
  @apply stroke-black;
}
.icon.-white {
  @apply stroke-white;
}
</style>

