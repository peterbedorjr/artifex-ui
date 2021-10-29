<template>
  <button :class="classes">
    <Spinner v-if="loading" />
    <Icon
      :icon="icon"
      color="white"
      class="button__icon"
      v-if="icon && !loading"
    />
    <slot />
  </button>
</template>

<script>
import Spinner from '../Spinner';
import Icon from '../Icon';
import oneOf from '../../validators/one-of';
import buttonVariants from '../../constants/button-variants';
import borderRadii from '../../constants/border-radii';
import sizes from '../../constants/sizes'
import icons from '../../constants/icons';
import size from '../../props/size';
import variant from '../../props/variant';

export default {
  name: 'Button',
  components: {
    Spinner,
    Icon,
  },
  props: {
    size: size(sizes),
    variant: variant(buttonVariants),
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
        },
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
    focus:border-transparent
    active:shadow-inner;
}

/* Border radius */
.button.-rounded-small {
  @apply rounded-sm;
}
.button.-rounded-normal {
  @apply rounded-md;
}
.button.-rounded-large {
  @apply rounded-lg;
}
.button.-rounded-full {
  @apply rounded-full;
}
.button.-rounded-left-small {
  @apply rounded-l-sm;
}
.button.-rounded-left-normal {
  @apply rounded-l-md;
}
.button.-rounded-left-large {
  @apply rounded-l-lg;
}
.button.-rounded-left-full {
  @apply rounded-l-full;
}
.button.-rounded-right-small {
  @apply rounded-r-sm;
}
.button.-rounded-right-normal {
  @apply rounded-r-md;
}
.button.-rounded-right-large {
  @apply rounded-r-lg;
}
.button.-rounded-right-full {
  @apply rounded-r-full;
}
.button.-rounded-top-small {
  @apply rounded-t-sm;
}
.button.-rounded-top-normal {
  @apply rounded-t-md;
}
.button.-rounded-top-large {
  @apply rounded-t-lg;
}
.button.-rounded-top-full {
  @apply rounded-t-full;
}
.button.-rounded-bottom-small {
  @apply rounded-b-sm;
}
.button.-rounded-bottom-normal {
  @apply rounded-b-md;
}
.button.-rounded-bottom-large {
  @apply rounded-b-lg;
}
.button.-rounded-bottom-full {
  @apply rounded-b-full;
}

/* Sizes */
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
    focus:ring-opacity-50
    bg-primary
    hover:bg-primary-light
    active:bg-primary-dark
    focus:ring-primary
    focus:bg-primary-dark;
}
.button:disabled.-primary {
  @apply bg-primary-fade text-gray-50 cursor-not-allowed;
}
.button.-secondary {
  @apply text-white
    focus:ring-opacity-50
    bg-secondary
    hover:bg-secondary-light
    active:bg-secondary-dark
    focus:ring-secondary
    focus:bg-secondary-dark;
}
.button:disabled.-secondary {
  @apply bg-secondary-fade text-gray-50 cursor-not-allowed;
}
.button.-success {
  @apply text-white
    focus:ring-opacity-50
    bg-success
    hover:bg-success-light
    active:bg-success-dark
    focus:ring-success
    focus:bg-success-dark;
}
.button:disabled.-success {
  @apply bg-success-fade text-gray-50 cursor-not-allowed;
}
.button.-danger {
  @apply text-white
    focus:ring-opacity-50
    bg-danger
    hover:bg-danger-light
    active:bg-danger-dark
    focus:ring-danger
    focus:bg-danger-dark;
}
.button:disabled.-danger {
  @apply bg-danger-fade text-gray-50 cursor-not-allowed;
}
.button.-warning {
  @apply text-black
    focus:ring-opacity-50
    bg-warning
    hover:bg-warning-light
    active:bg-warning-dark
    focus:ring-warning
    focus:bg-warning-dark;
}
.button:disabled.-warning {
  @apply bg-warning-fade text-gray-500 cursor-not-allowed;
}
.button.-info {
  @apply text-white
    focus:ring-opacity-50
    bg-info
    hover:bg-info-light
    active:bg-info-dark
    focus:ring-info
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

/* Icons */
.button__icon {
  @apply -ml-1 mr-3 h-5 w-5;
}
</style>
