import React from 'react'
import '../Style/SignUpCss.css';
import aikyamLogo from '../Images/aikyamLogo.png'
import { Form } from 'react-router-dom'
function Signup() {
    return (
        <div className='Body'>
            <div className='container'>
                <img src={aikyamLogo} alt='Aikyam' />
                <h2>Register with Aikyam!</h2>
                <p className='slogan'>Please fill your details to register</p>
                <div className='loginform'>
                    <form>
                        <div className='input-container'>
                            <label>Name</label>
                            <input type='text' placeholder='Enter Your Name' id='name' />
                        </div>
                        <div className='input-container'>
                            <label>Email</label>
                            <input type='email' placeholder='example@gmail.com' id='email' />
                        </div>
                        <div className='input-container'>
                            <label>Password</label>
                            <input type='password' placeholder='password' id='password' />
                        </div>
                        <button id='submit' className='btn'>SignUp</button>

                    </form>
                    <div className='extra'>
                        <hr></hr>
                        <p>Or</p>
                    </div>
                    <button id='signup' className='btn'>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Signup