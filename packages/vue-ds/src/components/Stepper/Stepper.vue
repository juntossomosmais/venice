<template>
  <ul class="stepper">
    <li
      :key="idx"
      v-bind:class="['step', step.completed ? 'active' : '']"
      v-for="(step, idx) in steps"
    >
      <span class="title">{{ step.title }}</span>
      <time class="subtitle" v-if="step.subtitle">{{ step.subtitle }}</time>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

import { IStepper } from '@venice/core/models'

const initial = [
  {
    title: 'Resgate realizado',
    subtitle: '31/03/2020',
    completed: true,
  },
  {
    title: 'Pedido confirmado',
    subtitle: '31/03/2020',
    completed: true,
  },
  {
    title: 'Na transportadora',
  },
  {
    title: 'Resgate realizado',
  },
  {
    title: 'Entregue',
  },
]

@Component
export default class Stepper extends Vue {
  @Prop({ default: initial }) steps!: IStepper['steps']
}
</script>

<style lang="scss" scoped>
@import '~@venice/styles/components/Stepper.module.scss';
</style>
