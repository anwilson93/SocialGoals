import LoginFormPage from '../LoginFormPage';
import './LandingPageJumbotron.css';
import social from './s-o-c-i-a-l-c-u-t-6iYb1BWWbV0-unsplash.jpg'
import paper from './kelly-sikkema-sDqT3iD6vSc-unsplash.jpg'
function LandingPageJumbotron  () {

    return (
        <>
            <div></div>
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