import {useSelector} from 'react-redux';


function GoalsFollowed ({goalId}) {

    
    // const likes = useSelector(state => {
    //     return state.likes.likes
    // });

    return (
        <>
        <h1>Follow</h1>
         {/* {likes && likes.map(like => {
            
             {if (like.goalId === goalId) {
                 return (
                     <h1>liked</h1>
                 )
             } else {
                return null
             }}
         })} */}
        </>
    )
}

export default GoalsFollowed;