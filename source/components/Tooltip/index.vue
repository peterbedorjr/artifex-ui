<template>
  <div
    class="inline-block"
    ref="target"
    @mouseenter="update(false)"
    @mouseleave="update(true)"
    @focus="update(false)"
    @blur="update(true)"
    tabindex="0"
  >
    <slot />
  </div>
  <TooltipTip ref="tooltip" v-show="! hidden" class="tooltip">
    <slot name="tooltip" />
    <div ref="arrow" class="arrow" />
  </TooltipTip>
</template>

<script>
import { createPopper } from '@popperjs/core';

import oneOf from '../../validators/one-of';
import positions from '../../constants/tooltip-positions';

import TooltipTip from './TooltipTip';

export default {
  name: 'Tooltip',
  components: { TooltipTip },
  props: {
    placement: {
      type: String,
      default: 'top',
      validator: (val) => oneOf(val, positions),
    },
    modifiers: {
      type: Array,
      default: () => [],
    },
  },
  mounted() {
    const { target, tooltip, arrow } = this.$refs;

    this.popper = createPopper(target, tooltip.$el, {
      placement: this.placement,
      modifiers: [
        ...this.modifiers,
        {
          name: 'offset',
          options: {
            offset: [0, 8],
          },
        },
        {
          name: 'arrow',
          options: {
            element: arrow,
          },
        },
      ],
    });

  },
  methods: {
    update(hidden) {
      this.hidden = hidden;
      this.popper.update();
    }
  },
  data: () => ({
    tooltipInstance: null,
    popper: null,
    hidden: true,
  })
};
</script>

<style scoped>
.arrow,
.arrow::before {
  position: absolute;
  width: 8px;
  height: 8px;
  background: inherit;
}

.arrow {
  visibility: hidden;
}

.arrow::before {
  visibility: visible;
  content: '';
  transform: rotate(45deg);
}

.tooltip[data-popper-placement^='top'] > .arrow {
  bottom: -4px;
}

.tooltip[data-popper-placement^='bottom'] > .arrow {
  top: -4px;
}

.tooltip[data-popper-placement^='left'] > .arrow {
  right: -4px;
}

.tooltip[data-popper-placement^='right'] > .arrow {
  left: -4px;
}
</style>
