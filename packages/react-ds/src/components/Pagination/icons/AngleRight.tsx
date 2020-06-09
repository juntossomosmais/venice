import React from 'react'

interface AngleRightProps {
  fill?: string
  width: string
  height: string
  viewBox: string
}

const AngleRight: React.SFC<AngleRightProps> = ({
  fill = 'white',
  width,
  height,
  viewBox,
}) => {
  return (
    <svg width={width} height={height} viewBox={viewBox}>
      <path
        d="M6.58912 5.10826L2.1538 0.328276C1.74706 -0.110076 1.08164 -0.110076 0.675362 0.328276L0.304711 0.727232C-0.10157 1.16459 -0.10157 1.88221 0.304711 2.32006L3.68962 5.96801L0.304711 9.61646C-0.10157 10.0543 -0.10157 10.7719 0.304711 11.2093L0.675362 11.6082C1.08164 12.0466 1.74706 12.0466 2.1538 11.6082L6.58912 6.82726C6.80753 6.59238 6.90471 6.2767 6.88851 5.96801C6.90471 5.65932 6.80753 5.34415 6.58912 5.10826Z"
        fill={fill}
      />
    </svg>
  )
}

export default AngleRight
