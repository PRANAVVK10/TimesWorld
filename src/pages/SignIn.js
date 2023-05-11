import React from 'react';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-solid-svg-icons'
import '../App.css';


export default function SignIn() {
    const navigate = useNavigate();
    return (
        <React.Fragment>
            <div className='main-container'>
                <div className='section-1'>
                    <h2>Sign In</h2>
                    <h5>NEW USER?
                        <span onClick={() => navigate("/")} className='create-account'> Create an account </span>
                    </h5>
                    <div className='inputs'>
                    <input className='input-1' type="text" name="" id="" placeholder='Username or email' />
                    <input className='input-1' type="password" name="" id="" placeholder='Password' />
                    </div>

                    <div className='keepIn-container'>
                        <input className='keepIn' type="checkbox" name="" id="signedIn" />
                        <label className='keepIn-input' htmlFor="signedIn">Keep me signed in</label>
                    </div>

                    <button className='signInButton' onClick={()=>{
                        navigate("/home")
                    }}>Sign In</button>

                    <div className='signInWithContainer'>
                    ---------
                        <span>Or Sign In With</span>
                        --------
                    </div>

                    <div className='iconContainer'>
                        <img src="google.png" width="20px" alt="" />
                        <img src="fb.png" width="20px" alt="" />
                        <img src="linkedin.png" width="30px" alt="" />
                        <img src="twitter.png" width="20px" alt="" />
                    </div>
                </div>
                <div className='bg-image section-2'>
                    <img className='bg-image-img' src="https://png.pngtree.com/png-vector/20190130/ourmid/pngtree-cartoon-woman-making-a-call-design-with-commercial-elements-png-image_648566.jpg" alt="" />
                </div>
            </div>

        </React.Fragment>
    )
}
