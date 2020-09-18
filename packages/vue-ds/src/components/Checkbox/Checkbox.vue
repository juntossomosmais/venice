<template>
  <div class="container">
    <div>
      <input
        type="checkbox"
        :id="selfId"
        :checked="value"
        @change="$emit('input', $event.target.checked)"
        v-bind="$attrs"
      />
      <label v-if="label" :for="selfId" class="label">
        {{ label }}
      </label>
    </div>
    <div v-if="error" class="error">
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
}
</script>

<style lang="scss" scoped>
@import '~@venice/styles/components/CheckboxRadio.module.scss';
</style>
