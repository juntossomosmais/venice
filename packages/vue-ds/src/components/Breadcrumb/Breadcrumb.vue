<template>
  <nav :class="breadcrumbClass" aria-label="breadcrumb">
    <slot />
  </nav>
</template>

<script lang="ts">
import { IBreadcrumb } from '@juntossomosmais/venice-types'
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({})
export default class Breadcrumb extends Vue {
  @Prop({ default: 'default' }) color!: IBreadcrumb['color']

  get breadcrumbClass() {
    return ['JSMBreadcrumb', `JSMBreadcrumb--${this.color}`]
  }
}
</script>

<style lang="scss" scoped>
@import '~@venice/styles/components/Breadcrumb.module.scss';
</style>
