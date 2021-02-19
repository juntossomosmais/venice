<template>
  <div class="JSMBreadcrumbItem">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class BreadcrumbItem extends Vue {}
</script>

<style lang="scss" scoped>
@import '~@venice/styles/components/Breadcrumb.module.scss';
</style>
