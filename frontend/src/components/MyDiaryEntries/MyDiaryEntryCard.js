
function MyDiaryEntryCard ({diary}) {

    try {
    return (
        <>
            {diary && diary.map(diar => {
                     
                return (
                    <>
                        <div>
                            {diar.entry}
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