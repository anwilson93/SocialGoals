import {useSelector} from 'react-redux';
// import './GoalsLiked.css';

function Unlike () {

    
    // const likes = useSelector(state => {
    //     return state.likes.likes
    // });

    // return (
    //     <>
    //      {likes && likes.map(like => {
            
    //          {if (like.goalId !== goalId) {
    //              return (
    //                 <div className='like-button-container'>
    //                     <button className='like-button'><i className="far fa-heart"/></button>
    //                 </div>
    //              )
    //          } else if (like.diaryEntryId !== diaryEntryId) {
    //             return (
    //                 <div className='like-button-container'>
    //                     <button className='like-button'><i className="far fa-heart"/></button>
    //                 </div>
    //             )
    //          }}
    //      })}
    //     </>
    // )

    return (
                   <div className='like-button-container'>
                       <button className='like-button'><i className="far fa-heart"/></button>
                   </div>
                )
}

export default Unlike;