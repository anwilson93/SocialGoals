import LoginFormPage from '../LoginFormPage';
import './LandingPageJumbotron.css';
import social from './s-o-c-i-a-l-c-u-t-6iYb1BWWbV0-unsplash.jpg'
import paper from './kelly-sikkema-sDqT3iD6vSc-unsplash.jpg'
function LandingPageJumbotron  () {

    return (
        <>
            <h2 className='h1'>Social Media for Goal-Setters and Encouragers</h2>
            <div className='landing-div'>
                <div>Set Goals</div>
                <div>Document Your Progress</div>
                <div>Be Encouraged</div>
                <div>Reach Your Goals</div>
            </div>
            <div className='jumbotron'>
                <img style={{height: 550}}
                key='social'
                src={social} alt='' /> 
                <LoginFormPage />
            </div>
        </>
    )
}

export default LandingPageJumbotron;