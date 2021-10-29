<template>
  <input
    :type="type"
    :class="classes"
  />
</template>

<script>
export default {
  name: 'Input',
  computed: {
    classes() {
      return ['input']
    },
  },
};
</script>

<style scoped>
.input {
  @apply shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:ring-2;
}
</style>
