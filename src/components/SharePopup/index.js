import { useState } from 'react';
import Popup from 'reactjs-popup'
import { IoNavigate } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaRedditAlien } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";
import { FaFacebookMessenger } from "react-icons/fa6";
import { BiLogoTelegram } from "react-icons/bi";
import { FaDiscord } from "react-icons/fa";
import { IoCopy } from "react-icons/io5";
import './index.css'

const SharePopup = () => {
    const [copySuccess, setCopySuccess] = useState("");
    const textToCopy = "This is the text to be copied!";

    const handleCopy = () => {
        navigator.clipboard
          .writeText(textToCopy)
          .then(() => {
            setCopySuccess("Copied!");
            setTimeout(() => setCopySuccess(""), 2000); // Clear success message after 2 seconds
          })
          .catch((err) => {
            console.error("Failed to copy text: ", err);
          });
    };
    

    return (
        <>
            <div className='popup-total-container'>
                <Popup
                    model
                    className='popup-container-second' 
                    trigger={
                        <button type="button" className='popup-edit-btn'><IoNavigate /> Share</button>
                    }
                    position="center center"
                >
                    {close => (
                        <div className='popup-container'>
                            <div className='popup-head-close-container'>
                                <div>
                                    <h1>Share post</h1>
                                </div>
                                <div onClick={() => close()}>
                                    <IoIosClose /> 
                                </div>
                            </div>
                            <ul className='icon-unorder-list-container'>
                                <li className='icon-list-container'>
                                    <div>
                                        <a href="https://twitter.com/i/oauth2/authorize" target='_blank'>
                                            <button className='btn-icon'>
                                                <div className='icon-container'><FaTwitter className='icon'/></div>
                                                <p>Twitter</p>
                                            </button>
                                        </a>
                                        <a href="https://www.facebook.com/v17.0/dialog/oauth" target='_blank'>
                                            <button className='btn-icon'>
                                                <div className='icon-container'><FaFacebook className='icon'/></div>
                                                <p>Facebook</p>
                                            </button>
                                        </a>
                                        <a href="https://www.reddit.com/api/v1/authorize" target='_blank'>
                                            <button className='btn-icon'>
                                                <div className='icon-container'><FaRedditAlien className='icon'/></div>
                                                <p>Reddit</p>
                                            </button>
                                        </a>
                                        <a href="https://discord.com" target='_blank'>
                                            <button className='btn-icon'>
                                                <div className='icon-container'><FaDiscord className='icon'/></div>
                                                <p>Discord</p>
                                            </button>
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <a href="https://wa.me/+919234567890" target='_blank'>
                                            <button className='btn-icon'>
                                                <div className='icon-container'><RiWhatsappFill className='icon'/></div>
                                                <p>WhatsApp</p>
                                            </button>
                                        </a>
                                        <a href="https://m.me" target='_blank'>
                                            <button className='btn-icon'>
                                                <div className='icon-container'><FaFacebookMessenger className='icon'/></div>
                                                <p>Messenger</p>
                                            </button>
                                        </a>
                                        <a href="https://t.me/" target='_blank'>
                                            <button className='btn-icon'>
                                                <div className='icon-container'><BiLogoTelegram className='icon'/></div>
                                                <p>Telegram</p>
                                            </button>
                                        </a>
                                        <a href="https://www.instagram.com/" target='_blank'>
                                            <button className='btn-icon'>
                                                <div className='icon-container'><img src="https://res.cloudinary.com/dj6c4lrt9/image/upload/v1734056225/instagram_f9x5lf.png" alt="instagram" /></div>
                                                <p>Instagram</p>
                                            </button>
                                        </a>
                                    </div>
                                </li>               
                            </ul>
                            <div>
                                <div>
                                    <h1>Page Link</h1>
                                </div>
                                <div className='popup-head-close-container'>
                                    <p>https://www.arnav/feed</p>
                                    <button className='btn-icon' onClick={handleCopy}><IoCopy /></button>
                                </div>
                            </div>
                        </div>    
                    )}
                </Popup>   
            </div>
        </>
    )
    
}
    
export default SharePopup