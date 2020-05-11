<template>
  <div
    :class="['spinner', color]"
    :style="{ height: `${size}px`, width: `${size}px` }"
    role="progressbar"
    aria-busy="true"
  ></div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

import { ISpinner } from '@venice/core/models'

@Component
export default class Spinner extends Vue {
  @Prop({ default: 'default' }) color!: ISpinner['color']
  @Prop({ default: 36 }) size!: ISpinner['size']
}
</script>

<style lang="scss" scoped>
@import '~@venice/styles/components/Spinner.module.scss';
</style>
