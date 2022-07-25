<template>
  <div class="JSMBreadcrumbItem">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'BreadcrumbItem',
})
</script>

<style lang="scss" scoped>
@import '~@venice/styles/components/Breadcrumb.module.scss';
</style>
