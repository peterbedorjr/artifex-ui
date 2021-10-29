<template>
  <Label class="label" v-if="label" v-bind="{ ...$attrs, ...$props }">{{ label }}</Label>
  <Input v-bind="{ ...$attrs, ...$props }" />
</template>

<script>
import Label from '../Label';
import Input from '../Input';
import variant from '../../props/variant';
import variants from '../../constants/validation-colors';
import borderRadii from '../../constants/border-radii';
import borderRadius from '../../props/border-radius';

export default {
  name: 'TextField',
  inheritAttrs: false,
  components: {
    Label,
    Input,
  },
  props: {
    variant: variant(variants),
    borderRadius: borderRadius(borderRadii),
    label: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped>
.label {
  @apply mb-1.5;
}
</style>
