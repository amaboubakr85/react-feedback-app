import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../shared/Card'

const AboutPage = () => {
  return (
    <Card>
      <div className='about'>
        <h1>About The App</h1>
        <p>This is a React Simple App To Leave A Feedback For Product Or A Service.</p>
        <p>Version : 1.0.0</p>
        <p>
          <Link to={'/'}>Back To Home</Link>
        </p>
      </div>
    </Card>
  )
}

export default AboutPage
