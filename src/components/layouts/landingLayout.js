import React from 'react'

function landingLayout({children, props}) {
  return (
    <div className="d-flex flex-column justify-content-center align-items-cent" {...props}>
        {children}
    </div>
  )
}

export default landingLayout