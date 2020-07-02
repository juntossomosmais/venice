<template>
  <nav :class="componentClass">
    <Button
      :color="color"
      :size="size"
      @click="onClickButton"
      v-bind="{ 'aria-expanded': isOpen }"
      class="inner-button"
    >
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
  @Prop({ default: 'rtl' }) direction!: ISplitButton['direction']
  @Prop({ default: false }) isFitMenu!: ISplitButton['isFitMenu']
  @Prop({ default: 'hover' }) openType!: ISplitButton['openType']
  @Prop({ type: String }) text!: ISplitButton['text']

  private isOpen = false

  get componentClass() {
    const clickType = this.openType === 'click' && this.isOpen ? 'active' : ''

    return ['splitButton', this.openType, clickType]
  }

  get dropdownClass() {
    return [
      'dropdown',
      this.direction,
      this.size,
      this.color,
      this.isFitMenu ? 'fitbutton' : '',
    ]
  }

  onClickButton() {
    this.isOpen = !this.isOpen
  }
}
</script>

<style lang="scss" scoped>
@import '~@venice/styles/components/SplitButton.module.scss';
</style>
