import React, { FC } from 'react'

import { IStepper } from '@venice/core/models'
import styles from '@venice/styles/components/Stepper.module.scss'

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

const Stepper: FC<IStepper> = ({ steps = initial }: IStepper) => (
  <ul className={styles.stepper}>
    {steps.map((item, index) => (
      <li
        key={index}
        className={`${styles.step} ${item.completed && styles.active}`}
      >
        <span className={styles.title}>{item.title}</span>
        {item.subtitle && (
          <time className={styles.subtitle}>{item.subtitle}</time>
        )}
      </li>
    ))}
  </ul>
)

export default Stepper
