import {useSelector} from 'react-redux';


function GoalsFollowed ({goalId}) {

    
    const follows = useSelector(state => {
        return state.follows.follows
    });

    return (
        <>
         {follows && follows.map(follow => {
            
             {if (follow.goalId === goalId) {
                 return (
                     <h1>following goal</h1>
                 )
             } else {
                return null
             }}
         })}
        </>
    )
}

export default GoalsFollowed;