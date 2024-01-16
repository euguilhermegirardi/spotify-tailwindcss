import React, { ReactElement, useState } from 'react'

type IconProps = {
  icon: ReactElement
  size: number
  isFill?: boolean
  isCursorPointer?: boolean
}

export function Icon({ icon, size, isFill, isCursorPointer }: IconProps) {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <div
      className={isCursorPointer ? 'cursor-pointer' : ''}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {React.cloneElement(icon, {
        color: isHovered ? '#fff' : '#b3b3b3',
        fill: isFill ? (isHovered ? '#fff' : '#b3b3b3') : null,
        size,
      })}
    </div>
  )
}
