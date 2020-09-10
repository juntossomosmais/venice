<template>
  <div class="container">
    <div>
      <input
        type="checkbox"
        :id="selfId"
        @change="$emit('input', $event.target.checked)"
        v-bind="{ ...props }"
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

@Component({})
export default class Checkbox extends Vue {
  @Prop({ default: '' }) id!: string
  @Prop({ default: '' }) label!: IField['label']
  @Prop({ default: '' }) error!: IField['error']
  @Prop({ default: null }) props

  private selfId = this.id || uniqid(`input__`)
}
</script>
