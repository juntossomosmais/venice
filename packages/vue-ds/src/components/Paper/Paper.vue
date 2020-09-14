<template>
  <div class="paper">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class Paper extends Vue {}
</script>

<style lang="scss" scoped>
@import '~@venice/styles/components/Paper.module.scss';
</style>
