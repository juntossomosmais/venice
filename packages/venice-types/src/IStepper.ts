export interface IStep {
  title: string
  subtitle?: string
  completed: boolean
}

export interface IStepper {
  steps: Array<IStep>
  className?: string
}
