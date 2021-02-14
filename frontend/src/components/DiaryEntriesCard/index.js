import { useSelector} from 'react-redux';
import CheckIfLikeDiaryEntry from '../CheckIfLike/CheckIfLikeDiaryEntry';
import './DiaryEntriesCard.css';
function DiaryEntriesCard ({userId}) {

    const diaries = useSelector(state => {
        return state.diaries.diaries
    });

    try {
      return (
        <>
            {diaries && diaries.map(diary => {
                let date = new Date(diary.createdAt).toString().slice(0, 16);
                let entry = diary.entry
                let diaryEntryId = diary.id
                let goalName = diary.Goal.name
                let diaryAuthor = diary.Goal.User.username

                return (
                    <>  
                        <div className='feed-container'>
                            <div className='individual-container' id='individual-diaries-container'>
                                <div> New diary entry for goal: {goalName} <p className='diary-username'>({diaryAuthor})</p></div>
                                <div className='space'></div>
                                {date}
                                <div className='diary-entry-container'> Entry: <p className='diary-entry'>{entry}</p> </div>
                                {/* <LikeAndFollowFormModal diaryEntryId={diaryEntryId} userId={userId}/>  */}
                                {/* <CheckLikeOrUnlike diaryEntryId={diaryEntryId}/> */}
                                {/* <CommentBox goalId={goalId}/> */}
                                <CheckIfLikeDiaryEntry diaryEntryId={diaryEntryId} /> 
                            </div>
                        </div>
                    </>
                )
            })}
           
          
        </>
    )} catch (e){
        return (
            <h4>Something went wrong. Try reloading the page</h4>
        )
    }

}

export default DiaryEntriesCard;