<template>
  <svg
    :class="['spinner', color]"
    :style="{ height: `${size}px`, width: `${size}px` }"
    role="progressbar"
    aria-busy="true"
    viewBox="0 0 66 66"
  >
    <circle
      :class="['circle']"
      fill="none"
      strokeWidth="6"
      strokeLinecap="round"
      cx="33"
      cy="33"
      r="30"
    ></circle>
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

import { ISpinner } from '@juntossomosmais/venice-types'

@Component
export default class Spinner extends Vue {
  @Prop({ default: 'default' }) color!: ISpinner['color']
  @Prop({ default: 36 }) size!: ISpinner['size']
}
</script>

<style lang="scss" scoped>
@import '~@venice/styles/components/Spinner.module.scss';
</style>
