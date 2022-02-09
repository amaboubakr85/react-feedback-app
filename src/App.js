import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FeedbackForm from './components/FeedbackForm'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import Header from './components/Header'
import FeedbackData from './data/FeedbackData'
import AboutPage from './pages/AboutPage'

const App = () => {
  // States for feedback
  const [feedback, setFeedback] = useState(FeedbackData)

  // functions of add and delete
  const addFeedback = (item) => {
    item.id = uuidv4()
    let newFeedback = [item, ...feedback]
    setFeedback(newFeedback)
    console.log(feedback)
  }
  const deleteFeedback = (id) => {
    const filterdFeedback = feedback.filter((feedback) => feedback.id !== id)
    setFeedback(filterdFeedback)
  }
  // JSX component
  return (
    <>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <FeedbackForm handleAdd={addFeedback} />
                  <FeedbackStats feedback={feedback} />
                  <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
                </>
              }></Route>
            <Route path='/about' element={<AboutPage />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
