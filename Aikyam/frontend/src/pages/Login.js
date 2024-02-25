import React from 'react'
import '../Style/LoginCss.css'
import aikyamLogo from '../Images/aikyamLogo.png'
// import { Form } from 'react-router-dom'
function Login() {
    return (
        <div className='Body'>
            <div className='container'>
                <img src={aikyamLogo} alt='Aikyam' />
                <h2>Welcome Back!</h2>
                <p className='slogan'>Please enter your details</p>
                <div className='loginform'>
                    <form>
                        <div className='input-container'>
                            <label>Email</label>
                            <input type='email' placeholder='example@gmail.com' id='email' />
                        </div>
                        <div className='input-container'>
                            <label>Password</label>
                            <input type='password' placeholder='password' id='password' />
                        </div>
                        <button id='submit' className='btn'>Login</button>

                    </form>
                    <div className='extra'>
                        <hr></hr>
                        <p>Or</p>
                    </div>
                    <button id='signup' className='btn'>SignUp</button>
                </div>
            </div>
        </div>
    )
}

export default Login