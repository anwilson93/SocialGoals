function SidePanelDetails({visible}) {
    if (!visible) return null

    return (
        <>
            <div>
                <ul>
                    <li>My Goals</li>
                    <li>My Diary Entries</li>
                </ul>
            </div>
        </>
    )
}


export default SidePanelDetails;