<template>
  <component :is="component" :class="classes">
    <slot />
  </component>
</template>

<script>
import borderRadius from '../../props/border-radius';
import boxShadow from '../../props/box-shadow';

export default {
  name: 'Box',
  props: {
    borderRadius: borderRadius(),
    boxShadow: boxShadow(),
    component: {
      type: String,
      default: 'div',
    },
  },
  computed: {
    classes() {
      return [
        'box',
        this.borderRadius ? `-rounded-${this.borderRadius}` : null,
        this.boxShadow ? `-shadow-${this.boxShadow}` : null,
      ];
    },
  },
};
</script>

<style scoped>
.box {
  @apply bg-white;
}

/* Border radius */
.box.-rounded-small {
  @apply rounded-sm;
}
.box.-rounded-normal {
  @apply rounded-md;
}
.box.-rounded-large {
  @apply rounded-lg;
}
.box.-rounded-full {
  @apply rounded-full;
}
.box.-rounded-left-small {
  @apply rounded-l-sm;
}
.box.-rounded-left-normal {
  @apply rounded-l-md;
}
.box.-rounded-left-large {
  @apply rounded-l-lg;
}
.box.-rounded-left-full {
  @apply rounded-l-full;
}
.box.-rounded-right-small {
  @apply rounded-r-sm;
}
.box.-rounded-right-normal {
  @apply rounded-r-md;
}
.box.-rounded-right-large {
  @apply rounded-r-lg;
}
.box.-rounded-right-full {
  @apply rounded-r-full;
}
.box.-rounded-top-small {
  @apply rounded-t-sm;
}
.box.-rounded-top-normal {
  @apply rounded-t-md;
}
.box.-rounded-top-large {
  @apply rounded-t-lg;
}
.box.-rounded-top-full {
  @apply rounded-t-full;
}
.box.-rounded-bottom-small {
  @apply rounded-b-sm;
}
.box.-rounded-bottom-normal {
  @apply rounded-b-md;
}
.box.-rounded-bottom-large {
  @apply rounded-b-lg;
}
.box.-rounded-bottom-full {
  @apply rounded-b-full;
}

/* Box Shadow */
.box.-shadow-small {
  @apply shadow-sm;
}
.box.-shadow-normal {
  @apply shadow;
}
.box.-shadow-medium {
  @apply shadow-md;
}
.box.-shadow-large {
  @apply shadow-lg;
}
.box.-shadow-xlarge {
  @apply shadow-xl;
}
.box.-shadow-xxlarge {
  @apply shadow-2xl;
}
.box.-shadow-inner {
  @apply shadow-inner;
}
.box.-shadow-none {
  @apply shadow-none;
}
</style>
