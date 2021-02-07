import DeleteButton from '../DeleteButton';

function MyDiaryEntryCard ({diary, userId}) {

    try {
    return (
        <>
            {diary && diary.map(diar => {
                let diaryEntryId = diar.id     
                return (
                    <>
                        <div>
                            {diar.entry}
                        </div>
                        < DeleteButton userId={userId} diaryEntryId={diaryEntryId}/>
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

export default MyDiaryEntryCard;