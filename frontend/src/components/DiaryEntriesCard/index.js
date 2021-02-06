import {useDispatch, useSelector} from 'react-redux';

function DiaryEntriesCard () {
    const diaries = useSelector(state => {
        return state.diaries.diaries
    });
      return (
        <>
            {diaries && diaries.map(diary => {
                let date = new Date(diary.createdAt).toString().slice(0, 16);
                let entry = diary.entry
                let goalId = diary.goalId


                return (
                    <>  
                        <div className='feed-container'>
                            <div className='individual-container'>
                                <div> {date}</div>
                                <div className='space'></div>
                                <div>{entry}</div>
                                {/* <LikeAndFollowFormModal goalId={goalId} userId={userId}/> <GoalsLiked goalId={goalId} /> <GoalsFollowed goalId={goalId} />
                                <CommentBox goalId={goalId}/> */}
                            </div>
                        </div>
                    </>
                )
            })}
           
          
        </>
    )

}

export default DiaryEntriesCard;