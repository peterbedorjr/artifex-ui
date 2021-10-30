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
</style>
