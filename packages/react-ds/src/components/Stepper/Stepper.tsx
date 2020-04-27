import React, { FC, useCallback } from 'react'

import PropTypes from 'prop-types'

import { IStepper } from '@venice/core/models'
import styles from '@venice/styles/components/Stepper.module.scss'

const Stepper: FC<IStepper> = ({ steps }: IStepper) => {
  const isActive = useCallback(
    (completed: boolean): string => (completed ? styles['active'] : ''),
    []
  )

  const isLastActive = useCallback(
    (index: number): string => {
      const currentStep = steps[index]
      const nextStep = steps[index + 1]

      return currentStep.completed && nextStep && !nextStep.completed
        ? styles['last']
        : ''
    },
    [steps]
  )

  return (
    <ul className={styles.stepper} data-testid="stepper">
      {steps.map((item, index) => (
        <li
          key={index}
          className={`${styles.step} ${isActive(item.completed)} ${isLastActive(
            index
          )}`}
        >
          <span className={styles.title}>{item.title}</span>
          {item.subtitle && (
            <span className={styles.subtitle}>{item.subtitle}</span>
          )}
        </li>
      ))}
    </ul>
  )
}

Stepper.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string,
      completed: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
}

Stepper.defaultProps = {
  steps: [],
}

export default Stepper
