import {useEffect, useState} from 'react';
import Cookies from 'js-cookie';
import FeedCard from '../FeedCard';
import './index.css'

const apiStatusConstraints = {
    initial: "INITIAL",
    success: "SUCCESS",
    failure: "FAILURE",
    progress: "IN_PROGRESS"
}

const Home = () => {
    const [apiStatus, setApiStatus] = useState(apiStatusConstraints.initial);
    const [postsData, setPostsData] = useState([]);

    const profileUrl = Cookies.get("profile")
    const firstNameVal = Cookies.get("displayName");
    console.log(firstNameVal)
    
    useEffect(() => {
        getResponseDetails();
    },[])

    const getResponseDetails = async() => {
        setApiStatus(apiStatusConstraints.progress);

        const apiUrl = "https://similar-mini-insta.onrender.com/posts";
        const options = {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
              }
        }
        const response = await fetch(apiUrl, options);
        const responseData = await response.json();
        const parsedData = responseData.map(post => ({
            ...post,
            media: typeof post.media === "string" ? JSON.parse(post.media) : post.media,
        }));
        console.log(parsedData)
        if (response.ok === true) {
            setApiStatus(apiStatusConstraints.success)
            setPostsData(parsedData)
        }else {
            setApiStatus(apiStatusConstraints.failure)
        }
    }

    const renderLoadingView = () => {
        return <div className="spinner"></div>;
    }

    const renderFailureView = () => (
        <div>
            <div>
                <img src="" alt="failure view" />
            </div>
            <div>
                <h5>Oops! Something Went Wrong</h5>
                <p>We are having some trouble to complete your request.Please try again.</p>
            </div>
            <div>
                <button type="button">Try again</button>
            </div>
        </div>
    )

    const renderSuccessView = () => (
        <ul className='unorder-list-container'>
            {postsData.map(eachItem => (
                <FeedCard feedDetails={eachItem} key={eachItem.id} />
            ))}
        </ul>
    )

    const renderResults = () => {
         switch(apiStatus) {
             case apiStatusConstraints.success:
                 return renderSuccessView();
             case apiStatusConstraints.failure:
                 return renderFailureView();
             case apiStatusConstraints.progress:
                 return renderLoadingView();
         }
    }

    const clickLogoutBtn = () => {
        Cookies.remove("email");
    }

    return (
        <div className='feed-containtainer'>
            <div className='center-view-point'>   
                <div>
                    <img src={profileUrl} alt="user profile" className='user-profile-img' />
                </div>
                <div>
                    <p className='paragraph-feed'>Welcome Back</p>
                    <h5 className='heading'>{firstNameVal}</h5>
                </div>
            </div>
            <div>{renderResults()}</div>
            <button type='button' onClick={clickLogoutBtn}>logout</button>
        </div>
    )
}

export default Home 
