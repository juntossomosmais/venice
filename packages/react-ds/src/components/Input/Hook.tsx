import React, { useState } from 'react'

interface IHook {
  children: Function
}
export default ({ children: Children }: IHook) => {
  const [formData, setFormData] = useState({
    cpf: 12345678901,
    cnpj: 12345678901234,
  })
  return <Children formData={formData} setFormData={setFormData} />
}
