<template>
  <div
    :class="tagClass"
    v-bind="asideInfo && { 'data-aside-info': asideInfo }"
    @click="isClickable && $emit('click')"
    :role="isClickable ? 'button' : ''"
  >
    <span v-if="startIcon" :class="`startIcon ${startIcon}`" />
    <span class="children">
      <!-- @slot To add something, like a text -->
      <slot />
    </span>
    <span v-if="endIcon" :class="`endIcon ${endIcon}`" />
  </div>
</template>
<script lang="ts">
import { ITag } from '@juntossomosmais/venice-types'
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  name: 'Tag',
})
export default class Tag extends Vue {
  @Prop({ default: '' }) asideInfo!: ITag['asideInfo']
  @Prop({ default: 'default' }) color!: ITag['color']
  @Prop({ default: false }) isClickable?: ITag['isClickable']
  @Prop({ default: 'rectangle' }) format!: ITag['format']
  @Prop({ default: '' }) startIcon!: string
  @Prop({ default: '' }) endIcon!: string

  get tagClass() {
    return [
      'tag',
      this.color,
      this.isClickable ? 'round-square' : this.format,
      this.isClickable && 'clickable',
    ]
  }
}
</script>

<style lang="scss" scoped>
@import '~@venice/styles/components/Tag.module.scss';
</style>
