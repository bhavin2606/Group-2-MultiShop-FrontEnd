import React from 'react'
import { Link } from 'react-router-dom'

export default function ErrorPage() {


  return (
      <div className='mt-5 container text-center'>
      <h1>Error 404.. Nothing is here</h1>
      <Link to="/" className='btn btn-outline-warning'>Back to Home</Link>
    </div>
  )
}
