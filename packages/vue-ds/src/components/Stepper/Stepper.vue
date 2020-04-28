<template>
  <ul class="stepper" data-testid="stepper">
    <li
      class="step"
      :class="`${isActive(step.completed)} ${isLastActive(idx)}`"
      v-for="(step, idx) in steps"
      :key="idx"
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
  @Prop({ default: [], type: Array }) steps!: IStepper['steps']

  isActive(completed: boolean) {
    return completed ? 'active' : ''
  }

  isLastActive(index: number) {
    const currentStep = this.steps[index]
    const nextStep = this.steps[index + 1]

    const currentStepIsTheLast =
      currentStep.completed && nextStep && !nextStep.completed

    return currentStepIsTheLast ? 'last' : ''
  }
}
</script>

<style lang="scss" scoped>
@import '~@venice/styles/components/Stepper.module.scss';
</style>
