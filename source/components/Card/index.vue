<template>
  <Box class="card">
    <header class="card__header" v-if="$slots.header || header || subheader">
      <slot name="header" v-if="$slots.header && ! header" />
      <template v-else-if="header || subheader">
        <h5 class="card__header-text">
          {{ header }}
        </h5>
        <h6 class="card__subheader-text" v-if="subheader">
          {{ subheader }}
        </h6>
      </template>
    </header>
    <div class="card__content">
      <slot />
    </div>
    <footer class="card__foter" v-if="$slots.footer">
      <slot name="footer" />
    </footer>
  </Box>
</template>

<script>
import Box from '../Box';
export default {
  name: 'Card',
  components: {
    Box,
  },
  props: {
    header: {
      type: String,
    },
    subheader: {
      type: String,
    },
  },
};
</script>

<style scoped>
.card__header {
  @apply p-3 border-b border-gray-200 bg-gray-100;
}
.card__header-text {
  @apply text-lg font-bold;
}
.card__subheader-text {
  @apply text-gray-500 font-semibold;
}
.card__content {
  @apply p-3;
}
</style>
