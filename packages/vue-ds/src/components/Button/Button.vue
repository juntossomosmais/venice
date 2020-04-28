<template>
  <a v-if="href" :class="['btn', color, variant, size]" :href="href">
    <span :class="'children'"><slot /></span>
  </a>
  <button v-else :class="['btn', color, variant, size]">
    <span :class="'children'"><slot /></span>
  </button>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

import { IButton } from '@venice/core/models'

@Component
export default class Button extends Vue {
  @Prop({ default: 'default' }) color!: IButton['color']
  @Prop({ default: 'filled' }) variant!: IButton['variant']
  @Prop({ default: 'medium' }) size!: IButton['size']
  @Prop() href!: IButton['href']
}
</script>

<style lang="scss" scoped>
@import '~@venice/styles/components/Button.module.scss';
</style>
