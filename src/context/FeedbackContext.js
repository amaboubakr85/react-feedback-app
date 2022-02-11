import React, { useState, createContext } from 'react'
import { v4 as uuidv4 } from 'uuid'

// create context
const FeedbackContext = createContext()

// feedback provider
export const FeedbackProvider = ({ children }) => {
  // states for feedback
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'this is a feedback for item 1',
      rating: 9,
    },
    {
      id: 2,
      text: 'this is a feedback for item 2',
      rating: 8,
    },
    {
      id: 3,
      text: 'this is a feedback for item 3',
      rating: 10,
    },
  ])
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })

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
  const editFeedback = (item) => {
    setFeedbackEdit({
      item: item,
      edit: true,
    })
  }

  const updateFeedback = (id, updtItem) => {
    setFeedback(feedback.map((item) => (item.id === id ? { ...item, ...updtItem } : item)))
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        addFeedback,
        deleteFeedback,
        editFeedback,
        updateFeedback,
      }}>
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
