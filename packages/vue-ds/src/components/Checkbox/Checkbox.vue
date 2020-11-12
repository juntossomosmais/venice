<template>
  <div class="container">
    <label :for="selfId" class="label" :style="cursor">
      <input
        class="checkbox"
        type="checkbox"
        :id="selfId"
        :checked="value"
        @change="$emit('input', $event.target.checked)"
        v-bind="$attrs"
      />
      <span class="customCheckbox jsm-icon-check"></span>
      {{ label }}
    </label>
    <div v-if="error" class="error jsm-icon-alert">
      {{ error }}
    </div>
  </div>
</template>

<script lang="ts">
import { IField } from '@juntossomosmais/venice-types'
import uniqid from 'uniqid'
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  inheritAttrs: false,
})
export default class Checkbox extends Vue {
  @Prop({ default: '' }) label!: IField['label']
  @Prop({ default: '' }) error!: IField['error']
  @Prop({ default: false }) value!: boolean

  private selfId = this.$attrs.id || uniqid(`input__`)

  get cursor() {
    const isDisabled = 'disabled' in this.$attrs

    return {
      cursor: isDisabled ? 'not-allowed' : 'pointer',
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@venice/styles/components/CheckboxRadio.module.scss';
</style>
