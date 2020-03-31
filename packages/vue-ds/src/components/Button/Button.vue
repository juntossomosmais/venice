<template>
  <a v-if="href" :class="['btn', color, variant]" :href="href">
    <slot />
  </a>
  <button v-else :class="['btn', color, variant]">
    <slot />
  </button>
</template>

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

<style lang="scss" scoped>
@import '~@venice/styles/components/Button.module.scss';
</style>
