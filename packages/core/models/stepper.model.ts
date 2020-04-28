interface Step {
  title: string
  subtitle?: string
  completed: boolean
}

export interface IStepper {
  steps: Array<Step>
}
