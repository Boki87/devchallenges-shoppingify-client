import React, {useState} from 'react'



import './Auth.scss'

import HeroImg from '../../assets/source.svg'

import Login from './Login'
import Register from './Register'

const Auth = () => {

    const [activeForm, setActiveForm] = useState('login')

    return (
        <div className='auth_wrapper'>            
                         
            <div className='form_wrapper'>

                <div className='form_wrapper__hero'>
                    <img src={HeroImg} alt="" />
                    <span>Shoppingify</span>
                </div>

                {activeForm === 'login' ?
                
                    <Login />
                    :
                    <Register />
                }

                <div>
                    {activeForm === 'login' ?
                        <p>
                            Don't have an account?                        
                            <span className='form_switcher' onClick={() => setActiveForm('register')}>Register here</span>
                        </p>
                        :
                        <p>
                            Already have an account?                        
                            <span className='form_switcher' onClick={() => setActiveForm('login')}>Login here</span>
                        </p>
                    }
                </div>
            </div>           
            
            <div className='auth_footer'>
                <span>Bojan Peric&nbsp;</span><a href="https://devchallenges.io/">@DevChallenges.io</a>
            </div>


            
        </div>
    )
}

export default Auth
