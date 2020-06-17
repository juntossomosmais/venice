import VMasker from 'vanilla-masker'

export const unMask = (value, mask) => {
  if (mask === 'money') {
    const valueNumerical = Number(value.replace(/\D/g, '')) / 100
    return valueNumerical.toFixed(2)
  }
  return value.replace(/\W/g, '')
}

const masker = (value, pattern, options) =>
  VMasker.toPattern(value, { pattern, ...options })

const multimasker = (value, patterns, options) =>
  masker(
    value,
    patterns.reduce(
      (memo, pattern) => (value.length <= unMask(memo).length ? memo : pattern),
      patterns[0]
    ),
    options
  )

export const mask = (value, pattern = '', options = {}) => {
  if (pattern === 'money') {
    return VMasker.toMoney(value, { unit: 'R$', precision: 2, ...options })
  }
  return typeof pattern === 'string'
    ? masker(value, pattern, options)
    : multimasker(value, pattern, options)
}
