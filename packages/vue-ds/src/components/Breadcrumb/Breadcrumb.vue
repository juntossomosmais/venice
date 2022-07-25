<template>
  <nav :class="breadcrumbClass" aria-label="breadcrumb">
    <slot />
  </nav>
</template>

<script lang="ts">
import { IBreadcrumb } from '@juntossomosmais/venice-types'
import Vue, { PropOptions } from 'vue'

export default Vue.extend({
  name: 'Breadcrumb',
  props: {
    color: { default: 'default' } as PropOptions<IBreadcrumb['color']>,
  },
  computed: {
    breadcrumbClass() {
      return ['JSMBreadcrumb', `JSMBreadcrumb--${this.color}`]
    },
  },
})
</script>

<style lang="scss" scoped>
@import '~@venice/styles/components/Breadcrumb.module.scss';
</style>
