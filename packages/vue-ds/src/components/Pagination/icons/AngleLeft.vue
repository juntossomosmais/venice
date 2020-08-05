<template>
  <svg :width="width" :height="height" :viewBox="viewBox">
    <path
      :class="fill"
      d="M0.410878 5.10826L4.8462 0.328276C5.25294 -0.110076 5.91836 -0.110076 6.32464 0.328276L6.69529 0.727232C7.10157 1.16459 7.10157 1.88221 6.69529 2.32006L3.31038 5.96801L6.69529 9.61646C7.10157 10.0543 7.10157 10.7719 6.69529 11.2093L6.32464 11.6082C5.91836 12.0466 5.25294 12.0466 4.8462 11.6082L0.410878 6.82726C0.192467 6.59238 0.0952926 6.2767 0.111488 5.96801C0.0952926 5.65932 0.192467 5.34415 0.410878 5.10826Z"
    />
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

import { IIcon } from '@juntossomosmais/venice-types'

@Component
export default class AngleLeft extends Vue {
  @Prop({ default: 'default' }) fill!: IIcon['fill']
  @Prop({ default: 12 }) width!: IIcon['width']
  @Prop({ default: 23 }) height!: IIcon['height']
  @Prop() viewBox!: IIcon['viewBox']
}
</script>

<style lang="scss" scoped>
@import '@venice/styles/components/Icon.module.scss';
</style>
