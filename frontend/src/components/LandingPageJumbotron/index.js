import LoginFormPage from '../LoginFormPage';
import './LandingPageJumbotron.css';
import social from './s-o-c-i-a-l-c-u-t-6iYb1BWWbV0-unsplash.jpg'
import notebook from './carolyn-christine-D7bmnvGJA2Q-unsplash.jpg'
import friends from './hudson-hintze-vpxeE7s-my4-unsplash.jpg';
import arrow from './icons8-arrow-64.png';
function LandingPageJumbotron  () {

    return (
        <>
            <div className='landing-div'>
                <h2 className='h2-landing'>Social Media for Goal-Setters and Encouragers</h2>
                <div className='steps'>
                    <div className='goal-bubbles'>Set Goals</div>
                    <img style={{width: 40}}
                        key='arrow'
                        src={arrow} alt='arrow' /> 
                    <div className='goal-bubbles'>Document Your Progress</div>
                    <img style={{width: 40}}
                        key='arrow'
                        src={arrow} alt='arrow' /> 
                    <div className='goal-bubbles'>Be Encouraged</div>
                    <img style={{width: 40}}
                        key='arrow'
                        src={arrow} alt='arrow' /> 
                    <div className='goal-bubbles'>Reach Your Goals</div>
                </div>
            </div>
            <div className='jumbotron'>
                <img style={{height: 500}}
                key='notebook'
                src={notebook} alt='notebook' /> 
                <LoginFormPage />
            </div>
        </>
    )
}

export default LandingPageJumbotron;