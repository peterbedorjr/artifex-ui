<template>
  <div :class="classes" role="alert">
    <div class="alert__content">
      <Icon
        :icon="icon"
        :color="color"
        class="alert__icon"
        v-if="showIcon"
      />
      <div class="alert__inner">
        <slot />
      </div>
    </div>
    <button class="h-full p-3 min-w-min" v-if="closable" @click="$emit('close', $event)">
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
        warning: 'alert',
        danger: 'xCircle',
      }

      return map[this.variant];
    },
    classes() {
      return [
        'alert',
        `-${this.variant}`,
      ];
    },
    color() {
      return this.variant;
    }
  },
};
</script>

<style scoped>
/* Base */
.alert {
  @apply flex justify-between items-center font-semibold rounded border border-t-4;
}
.alert__content {
  @apply flex items-center p-3;
}
.alert__icon {
  @apply mr-2 min-w-min;
}

/* Colors */
.alert.-info {
  @apply bg-blue-200 text-info-darker border-info;
}
.alert.-warning {
  @apply bg-yellow-100 text-yellow-800 border-warning-darker;
}
.alert.-danger {
  @apply bg-red-200 text-danger-darker border-danger-darker;
}
.alert.-success {
  @apply bg-green-200 text-success-darker border-success-darker;
}
</style>
