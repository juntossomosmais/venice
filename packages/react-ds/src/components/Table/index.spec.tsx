import React from 'react'

import { render } from '@testing-library/react'

import '@testing-library/jest-dom'

import { Table } from '.'

describe('<Table />', () => {
  it('should display a striped table', () => {
    const { container } = render(
      <Table striped={true}>
        <thead>
          <tr>
            <th>Header</th>
            <th>Header</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
          <tr>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
        </tbody>
      </Table>
    )

    expect(container.firstChild).toHaveClass('striped')
  })

  it('should display a table with centralized elements', () => {
    const { container } = render(
      <Table center={true}>
        <thead>
          <tr>
            <th>Header</th>
            <th>Header</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
          <tr>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
        </tbody>
      </Table>
    )

    expect(container.firstChild).toHaveClass('center')
  })
})
