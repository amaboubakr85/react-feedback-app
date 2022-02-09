import Card from '../shared/Card'
import { FaTimes } from 'react-icons/fa'
const FeedbackItem = ({ item: { id, rating, text }, handleDelete }) => {
  return (
    <Card reverse={false}>
      <div className='num-display'>{rating}</div>
      <button className='close' onClick={() => handleDelete(id)}>
        <FaTimes color='purple' />
      </button>
      <div className='text-display'>{text}</div>
    </Card>
  )
}

export default FeedbackItem