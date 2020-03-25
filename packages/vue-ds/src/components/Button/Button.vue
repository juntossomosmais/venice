<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

import { IButton } from '@venice/core/models'

@Component
export default class Button extends Vue {
  @Prop({ default: 'default' }) color!: IButton['color']
  @Prop({ default: 'filled' }) variant!: IButton['variant']
  @Prop() href!: IButton['href']
}
</script>

<template>
  <a
    v-if="href"
    :class="[$style.btn, $style[color], $style[variant]]"
    :href="href"
  >
    <slot />
  </a>
  <button v-else :class="[$style.btn, $style[color], $style[variant]]">
    <slot />
  </button>
</template>

<style lang="scss" module>
@import '~@venice/styles/src/components/Button.module.scss';
</style>
