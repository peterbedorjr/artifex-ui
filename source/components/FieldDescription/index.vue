<template>
  <p class="field-description" tabindex="-1">
    <slot />
  </p>
</template>

<script>
export default {
  name: 'FieldDescription',
};
</script>

<style scoped>
.field-description {
  @apply text-xs text-gray-500;
}
</style>
