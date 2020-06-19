<template>
  <component
    :is="href ? 'a' : 'button'"
    :class="buttonClass"
    :href="href"
    :role="href ? '' : 'button'"
    :aria-busy="isLoading"
    @click="$emit('click')"
  >
    <Spinner
      v-if="isLoading"
      :color="spinnerColor"
      :size="spinnerSize"
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
  @Prop({ default: 'round-square' }) shape!: IButton['shape']
  @Prop({ default: 'large' }) size!: IButton['size']
  @Prop({ default: false }) isLoading!: IButton['isLoading']
  @Prop() href!: IButton['href']

  get buttonClass() {
    return [
      'button',
      this.color,
      this.variant,
      this.shape,
      this.size,
      this.isLoading ? 'isLoading' : '',
    ]
  }

  get spinnerColor() {
    return this.variant === 'filled' ? `${this.color}-contrast` : this.color
  }

  get spinnerSize() {
    return this.size === 'small' ? 16 : 24
  }
}
</script>

<style lang="scss" scoped>
@import '~@venice/styles/components/Button.module.scss';
</style>
