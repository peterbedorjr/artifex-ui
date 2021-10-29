<template>
  <button :class="classes">
    <Spinner v-if="loading" />
    <Icon :icon="icon" color="white" class="button__icon" v-if="icon && ! loading" />
    <slot />
  </button>
</template>

<script>
import Spinner from '../Spinner';
import Icon from '../Icon';
import oneOf from '../../validators/one-of';
import buttonVariants from '../../constants/button-variants';
import sizes from '../../constants/button-sizes';
import borderRadii from '../../constants/border-radii';
import icons from '../../constants/icons';

export default {
  name: 'Button',
  components: {
    Spinner,
    Icon,
  },
  props: {
    variant: {
      type: String,
      default: 'primary',
      validator: (val) => oneOf(val, buttonVariants),
    },
    size: {
      type: [String, null],
      default: null,
      validator: (val) => oneOf(val, [...sizes, null]),
    },
    block: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    borderRadius: {
      type: String,
      default: 'normal',
      validator: (val) => oneOf(val, borderRadii),
    },
    icon: {
      type: String,
      validator: (val) => oneOf(val, icons),
    },
  },
  computed: {
    classes() {
      return [
        'button',
        `-${this.variant}`,
        this.size ? `-${this.size}` : null,
        `-rounded-${this.borderRadius}`,
        {
          '-block': this.block,
          '-shifted': this.loading || this.icon,
        }
      ];
    },
  },
};
</script>

<style>
/* Base */
.button {
  @apply font-bold
    py-2
    px-8
    relative
    focus:outline-none
    focus:ring-2
    focus:border-transparent;
}

/* Border radius */
.-rounded-small {
  @apply rounded-sm;
}
.-rounded-normal {
  @apply rounded-md;
}
.-rounded-large {
  @apply rounded-lg;
}
.-rounded-full {
  @apply rounded-full;
}
.-rounded-left-small {
  @apply rounded-l-sm;
}
.-rounded-left-normal {
  @apply rounded-l-md;
}
.-rounded-left-large {
  @apply rounded-l-lg;
}
.-rounded-left-full {
  @apply rounded-l-full;
}
.-rounded-right-small {
  @apply rounded-r-sm;
}
.-rounded-right-normal {
  @apply rounded-r-md;
}
.-rounded-right-large {
  @apply rounded-r-lg;
}
.-rounded-right-full {
  @apply rounded-r-full;
}
.-rounded-top-small {
  @apply rounded-t-sm;
}
.-rounded-top-normal {
  @apply rounded-t-md;
}
.-rounded-top-large {
  @apply rounded-t-lg;
}
.-rounded-top-full {
  @apply rounded-t-full;
}
.-rounded-bottom-small {
  @apply rounded-b-sm;
}
.-rounded-bottom-normal {
  @apply rounded-b-md;
}
.-rounded-bottom-large {
  @apply rounded-b-lg;
}
.-rounded-bottom-full {
  @apply rounded-b-full;
}

/* Sizing */
.button.-block {
  @apply block w-full;
}
.button.-shifted {
  @apply flex pl-4 pr-5 justify-center items-center;
}
.button.-small {
  @apply py-1 px-2 text-sm;
}
.button.-small.-shifted {
  @apply pl-3 pr-5;
}
.button.-large {
  @apply py-3 px-10 text-lg;
}
.button.-large.-shifted {
  @apply pl-6 pr-7;
}

/* Colors */
.button.-primary {
  @apply text-white
    bg-primary
    hover:bg-primary-light
    active:bg-primary-dark
    focus:ring-primary-lighter
    focus:bg-primary-dark;
}
.button:disabled.-primary {
  @apply bg-primary-fade text-gray-50 cursor-not-allowed;
}
.button.-secondary {
  @apply text-white
    bg-secondary
    hover:bg-secondary-light
    active:bg-secondary-dark
    focus:ring-secondary-lighter
    focus:bg-secondary-dark;
}
.button:disabled.-secondary {
  @apply bg-secondary-fade text-gray-50 cursor-not-allowed;
}
.button.-success {
  @apply text-white
    bg-success
    hover:bg-success-light
    active:bg-success-dark
    focus:ring-success-lighter
    focus:bg-success-dark;
}
.button:disabled.-success {
  @apply bg-success-fade text-gray-50 cursor-not-allowed;
}
.button.-danger {
  @apply text-white
    bg-danger
    hover:bg-danger-light
    active:bg-danger-dark
    focus:ring-danger-lighter
    focus:bg-danger-dark;
}
.button:disabled.-danger {
  @apply bg-danger-fade text-gray-50 cursor-not-allowed;
}
.button.-warning {
  @apply text-black
    bg-warning
    hover:bg-warning-light
    active:bg-warning-dark
    focus:ring-warning-lighter
    focus:bg-warning-dark;
}
.button:disabled.-warning {
  @apply bg-warning-fade text-gray-500 cursor-not-allowed;
}
.button.-info {
  @apply text-white
    bg-info
    hover:bg-info-light
    active:bg-info-dark
    focus:ring-info-lighter
    focus:bg-info-dark;
}
.button:disabled.-info {
  @apply bg-info-fade text-gray-50 cursor-not-allowed;
}
.button.-link {
  @apply font-normal
    text-primary
    hover:underline;
}

.button__icon {
  @apply -ml-1 mr-3 h-5 w-5;
}
</style>
