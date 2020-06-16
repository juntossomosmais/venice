<template>
  <nav class="SplitButton">
    <Button :color="color" :size="size" @click="onClickButton">
      <slot name="text">{{ text }}</slot>
      <span class="caret"></span>
    </Button>
    <div :class="dropdownClass" role="menu">
      <slot />
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

import { ISplitButton } from '@venice/core/models'

import Button from '../Button/Button.vue'

@Component({
  components: {
    Button,
  },
})
export default class SplitButton extends Vue {
  @Prop({ default: 'default' }) color!: ISplitButton['color']
  @Prop({ default: 'large' }) size!: ISplitButton['size']
  @Prop({ type: String }) text!: ISplitButton['text']
  @Prop({ default: false }) isOpen!: boolean

  get dropdownClass() {
    return ['dropdown', this.size, this.color, this.isOpen ? 'show' : 'hide']
  }

  onClickButton() {
    this.isOpen = !this.isOpen
  }
}
</script>

<style lang="scss" scoped>
@import '~@venice/styles/components/SplitButton.module.scss';
</style>
