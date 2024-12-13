import React, {useState, useEffect} from 'react';
import {auth, provider} from './config';
import { signInWithPopup } from 'firebase/auth';
import Home from '../Home';
import Cookies from 'js-cookie';
import './index.css'

const SignIn = () => {
    const [userEmail, setUserEmail] = useState('');
    const [userPick, setUserPick] = useState("")

    useEffect(() => {
        setUserEmail(Cookies.get('email'));
        setUserPick(Cookies.get('profile'))
    }, [])

    const onClickSignInBtn = () => {
        signInWithPopup(auth, provider).then ((data) => {
            setUserEmail(data.user.email)
            setUserPick(data.user.photoURL)
            console.log(data)
            Cookies.set("email", data.user.email, {expires: 30, path: "/"});
            Cookies.set("profile", data.user.photoURL, {expires: 30, path: "/"});
            Cookies.set("displayName", data.user.displayName, {expires: 30, path: "/"});
        })
    }

    return (
        <div>
            {userEmail ? <Home /> : (
                <div className='sign-in-container'> 
                    <div className='grid-container'>
                        <div className='grid-item'>
                            <div className='grid-item-container-1 '>
                                <div className='grid-item-container'></div>
                            </div>
                            <div className='grid-item-container-1'>
                                <div className='grid-item-container grid-item-container-2'></div>
                            </div>
                            
                            <div className='grid-item-container-1'>
                                <div className='grid-item-container grid-item-container-3'></div>
                            </div>
                        </div>
                        <div className='grid-item'>
                            <div className='grid-item-container-1'>
                                <div className='grid-item-container grid-item-container-3 grid-item-container-2-1'></div>
                            </div>
                            <div className='grid-item-container-1 '>
                                <div className='grid-item-container grid-item-container-2-2'></div>
                            </div>
                            <div className='grid-item-container-1'>
                                <div className='grid-item-container grid-item-container-2-3'></div>
                            </div>
                        </div>
                        <div className='grid-item'>
                            <div className='grid-item-container-1 grid-last-item-container'>
                                <div className='grid-item-container grid-last-item-1'></div>
                            </div>
                            <div className='grid-item-container-1 grid-last-item-container'>
                                <div className='grid-item-container grid-last-item-2'></div>
                            </div>
                            
                            <div className='grid-item-container-1 grid-last-item-container'>
                                <div className='grid-item-container grid-item-container-3 grid-last-item-3 '></div>
                            </div>
                        </div>
                        
                    </div>
                    <div className='bottom-card-container'>
                        <div className='center-view'>
                            <div>
                                <img src="https://res.cloudinary.com/dj6c4lrt9/image/upload/v1733927724/2de875e6142d3dde26f7cea380c77837_1_frimvh.png" alt="small img" />
                            </div>
                            <div>
                                <h5 className='space heading'>Vibesnap</h5>
                            </div>
                        </div>
                        <div>
                            <p className='paragraph'>Moments That Matter, Shared Forever.</p>
                        </div>
                        <div>
                            <button onClick={onClickSignInBtn} className='google-btn'>
                                <div className='center-view'>
                                    <div>
                                        <img src="https://res.cloudinary.com/dj6c4lrt9/image/upload/v1733928206/Group_1171276158_jkei7t.png" alt="google" />
                                    </div>
                                    <div>
                                        <p className='space'>Continue with Google</p>
                                    </div>
                                </div>
                            </button>
                        </div> 
                    </div>
                </div>
            )}
        </div>
        
    )
}

export default SignIn