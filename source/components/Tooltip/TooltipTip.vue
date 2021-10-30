<template>
  <div class="tooltip" role="tooltip">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'TooltipTip',
}
</script>

<style scoped>
.tooltip {
  @apply bg-secondary text-white px-4 py-1 rounded;
}
/*
#tooltip[data-popper-placement^='top'] > #arrow {
  bottom: -4px;
}

#tooltip[data-popper-placement^='bottom'] > #arrow {
  top: -4px;
}

#tooltip[data-popper-placement^='left'] > #arrow {
  right: -4px;
}

#tooltip[data-popper-placement^='right'] > #arrow {
  left: -4px;
}

#arrow,
#arrow::before {
  position: absolute;
  width: 8px;
  height: 8px;
  background: inherit;
}

#arrow {
  visibility: hidden;
}

#arrow::before {
  visibility: visible;
  content: '';
  transform: rotate(45deg);
} */
</style>
