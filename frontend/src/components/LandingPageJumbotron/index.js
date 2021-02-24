import LoginFormPage from '../LoginFormPage';
import './LandingPageJumbotron.css';
import social from './s-o-c-i-a-l-c-u-t-6iYb1BWWbV0-unsplash.jpg'
import notebook from './carolyn-christine-D7bmnvGJA2Q-unsplash.jpg'
import friends from './hudson-hintze-vpxeE7s-my4-unsplash.jpg'
function LandingPageJumbotron  () {

    return (
        <>
            <div className='landing-div'>
                <h2 className='h1'>Social Media for Goal-Setters and Encouragers</h2>
                <div className='steps'>
                    <div>Set Goals</div>
                    <div>Document Your Progress</div>
                    <div>Be Encouraged</div>
                    <div>Reach Your Goals</div>
                    <div>Achieve More Together</div>
                </div>
            </div>
            <div className='jumbotron'>
                <img style={{height: 550}}
                key='social'
                src={friends} alt='' /> 
                <LoginFormPage />
            </div>
        </>
    )
}

export default LandingPageJumbotron;