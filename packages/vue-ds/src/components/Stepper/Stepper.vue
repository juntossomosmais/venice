<template>
  <ul class="stepper">
    <li
      :key="idx"
      class="step"
      :class="`${isActive(step.completed)} ${isLastActive(idx)}`"
      v-for="(step, idx) in steps"
    >
      <span class="title">{{ step.title }}</span>
      <span class="subtitle" v-if="step.subtitle">{{ step.subtitle }}</span>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

import { IStepper } from '@venice/core/models'

@Component
export default class Stepper extends Vue {
  @Prop({ default: [] }) steps!: IStepper['steps']

  isActive(completed: boolean) {
    return completed ? 'active' : ''
  }

  isLastActive(index: number) {
    const currentStep = this.steps[index]
    const nextStep = this.steps[index + 1]

    return currentStep.completed && nextStep && !nextStep.completed
      ? 'last'
      : ''
  }
}
</script>

<style lang="scss" scoped>
@import '~@venice/styles/components/Stepper.module.scss';
</style>
