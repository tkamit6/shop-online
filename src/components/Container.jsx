import React from 'react'

export default function Container({children, className}) {
  return (
    <div className={`${className} max-w-7xl mx-auto px-4 xl:px-0 py-10`}>{children}</div>
  )
}
