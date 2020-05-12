<template>
  <component
    :is="href ? 'a' : 'button'"
    :class="['btn', color, variant, size, isLoading ? 'isLoading' : '']"
    :href="href"
    :role="href ? '' : 'button'"
    :aria-busy="isLoading"
    @click="$emit('click')"
  >
    <Spinner
      v-if="isLoading"
      :color="variant === 'filled' ? `${color}-contrast` : color"
      :size="size === 'small' ? 16 : 24"
      class="loading"
    />
    <span class="startIcon">
      <!-- @slot To add icon at the beginning -->
      <slot name="startIcon" />
    </span>
    <span class="children">
      <!-- @slot To add something, like a text -->
      <slot />
    </span>
    <span class="endIcon">
      <!-- @slot To add icon at the end -->
      <slot name="endIcon" />
    </span>
  </component>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

import { IButton } from '@venice/core/models'

import Spinner from '../Spinner/Spinner.vue'

@Component({
  components: {
    Spinner,
  },
})
export default class Button extends Vue {
  @Prop({ default: 'default' }) color!: IButton['color']
  @Prop({ default: 'filled' }) variant!: IButton['variant']
  @Prop({ default: 'medium' }) size!: IButton['size']
  @Prop({ default: false }) isLoading!: IButton['isLoading']
  @Prop() href!: IButton['href']
}
</script>

<style lang="scss" scoped>
@import '~@venice/styles/components/Button.module.scss';
</style>
