import '../../cssfiles/review.css'

const Review = (props) => {
  return (
    <div className='review'>
        <div className="review-header">
            <span className='reviewer'>
                <img src={props.src} alt="" />
            </span>
            <h1>{props.name}</h1>
        </div>
        <div className="review-footer">
            <p>{props.p}</p>
        </div>
    </div>
  )
}

export default Review
