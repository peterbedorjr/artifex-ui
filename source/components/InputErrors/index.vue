<template>
  <ul class="form-errors">
    <li
      class="form-errors__error"
      v-for="(error, i) in errors"
      :key="i"
    >
      {{ error }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'InputErrors',
  props: {
    errors: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>
.form-errors {
  @apply text-danger text-xs;
}
</style>
