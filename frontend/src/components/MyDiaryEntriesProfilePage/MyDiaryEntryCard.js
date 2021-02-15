import DeleteButton from '../DeleteButton';

function MyDiaryEntryCard ({diary, userId}) {

    try {
    return (
        <>
            {diary && diary.map(diar => {
                let diaryEntryId = diar.id     
                let date = new Date(diar.createdAt).toString().slice(0, 16);
                
                return (
                    <>
                        <div className='individual-diary-entry'>
                            {date}: {diar.entry}
                            < DeleteButton userId={userId} diaryEntryId={diaryEntryId}/>
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

export default MyDiaryEntryCard;