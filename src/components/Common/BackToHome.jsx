import React from 'react'
import { Link } from 'react-router-dom'

export default function BackToHome() {
  return (
      <div>
          <Link to={'/'}>
          <button className="btn btn-primary mx-3">
            Back to Home
          </button>
          </Link>
    </div>
  )
}
