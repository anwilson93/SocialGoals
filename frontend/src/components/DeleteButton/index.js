import './DeleteButton.css';
function DeleteButton ({goalId}) {
    const deleteSomething = () => {
        console.log('delete', goalId)
    }
    return (
        <button className='delete-button' onClick={deleteSomething}>Delete</button>
    )
}

export default DeleteButton;