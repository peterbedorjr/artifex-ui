<template>
  <button :class="classes">
    <Loader v-if="loading" />
    <slot v-else />
  </button>
</template>

<script>
import Loader from "../Spinner";
import oneOf from "../../validators/one-of";
import buttonVariants from "../../constants/button-variants";
import sizes from "../../constants/button-sizes";

export default {
  name: 'Button',
  components: {
    Loader,
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
  },
  computed: {
    classes() {
      return [
        'button',
        `-${this.variant}`,
        this.size ? `-${this.size}` : null,
        {
          '-block': this.block,
          '-loading': this.loading,
        }
      ];
    },
  },
};
</script>

<style>
.button {
  min-width: 84px;

  @apply font-bold
    py-2
    px-4
    rounded
    focus:outline-none
    focus:ring-2
    focus:border-transparent;
}
.button.-block {
  @apply block w-full;
}
.button.-loading {
  @apply flex justify-center content-center;
}
.button.-small {
  @apply py-1 px-2 text-sm;
}
.button.-large {
  @apply py-3 px-6 text-lg;
}
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
</style>
