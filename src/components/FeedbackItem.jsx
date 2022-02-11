import Card from '../shared/Card'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import { FaTimes, FaEdit } from 'react-icons/fa'
const FeedbackItem = ({ item: { id, rating, text }, handleDelete }) => {
  const { editFeedback, deleteFeedback } = useContext(FeedbackContext)
  const item = {
    id,
    text,
    rating,
  }
  return (
    <Card reverse={false}>
      <div className='num-display'>{rating}</div>
      <button className='close' onClick={() => deleteFeedback(id)}>
        <FaTimes color='purple' />
      </button>

      <button className='edit' onClick={() => editFeedback(item)}>
        <FaEdit color='purple' />
      </button>
      <div className='text-display'>{text}</div>
    </Card>
  )
}

export default FeedbackItem
