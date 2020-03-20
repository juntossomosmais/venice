<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class MyButton extends Vue {}
</script>

<template>
	<button :class="$style.btn">I am button 2 - Press Me</button>
</template>

<style lang="scss" module>
@import '~@venice/styles/src/components/Button.module.scss';
</style>
