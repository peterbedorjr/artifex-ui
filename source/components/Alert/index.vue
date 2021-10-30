<template>
  <div :class="classes" role="alert">
    <div class="alert__content">
      <Icon
        :icon="icon"
        :color="color"
        class="alert__icon"
        v-show="showIcon"
      />
      <div class="alert__inner">
        <slot />
      </div>
    </div>
    <button class="h-full p-3" v-if="closable">
      <Icon
        icon="x"
        :color="color"
      />
    </button>
  </div>
</template>

<script>
import Icon from '../Icon';

import validationColors from '../../constants/validation-colors';
import oneOf from '../../validators/one-of';

export default {
  name: 'Alert',
  components: {
    Icon,
  },
  props: {
    closable: {
      type: Boolean,
      default: false,
    },
    variant: {
      type: String,
      default: 'info',
      validator: (val) => oneOf(val, validationColors),
    },
    showIcon: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    icon() {
      const map = {
        info: 'info',
        success: 'checkCircle',
        warning: 'alertTriangle',
        danger: 'xOctagon',
      }

      return map[this.variant];
    },
    color() {
      return this.variant === 'warning' ? 'black' : 'white';
    },
    classes() {
      return [
        'alert',
        `-${this.variant}`,
      ];
    },
  },
};
</script>

<style scoped>
.alert {
  @apply flex justify-between items-center font-semibold;
}
.alert__content {
  @apply flex items-center p-3;
}
.alert__icon {
  @apply mr-2;
}
.alert.-info {
  @apply bg-info-fade text-info-darker border-2 border-info;
}
.alert.-warning {
  @apply bg-warning text-black border-2 border-warning-darker;
}
.alert.-danger {
  @apply bg-danger text-white border-2 border-danger-darker;
}
.alert.-success {
  @apply bg-success text-white border-2 border-success-darker;
}
</style>
