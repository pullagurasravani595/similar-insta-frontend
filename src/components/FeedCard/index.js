import { FaHeart } from "react-icons/fa";
import SharePopup from "../SharePopup";
import './index.css'

const FeedCard = (props) => {
    const {feedDetails} = props;
    const {id, name, user_image, time, description, media, likes} = feedDetails
    let classNameVal = null;

    if (parseInt(id)%2 === 0) {
        classNameVal = "odd"
    }else {
        classNameVal = "even"
    } 

    console.log(classNameVal);

    const timeAgo = date => {
        const now = new Date();
        const diff = now - new Date(date); // Difference in milliseconds
    
        const seconds = Math.floor(diff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const months = Math.floor(days / 30); // Approximation (30 days per month)
        const years = Math.floor(months / 12);
    
        if (years > 0) {
            return years === 1 ? "1 year ago" : `${years} years ago`;
        }
        if (months > 0) {
            return months === 1 ? "1 month ago" : `${months} months ago`;
        }
        if (days > 0) {
            return days === 1 ? "1 day ago" : `${days} days ago`;
        }
        if (hours > 0) {
            return hours === 1 ? "1 hour ago" : `${hours} hours ago`;
        }
        if (minutes > 0) {
            return minutes === 1 ? "1 minute ago" : `${minutes} minutes ago`;
        }
        if (seconds > 0) {
            return seconds === 1 ? "1 second ago" : `${seconds} seconds ago`;
        }
        return "Just now";
    }
    
    
    return (
        <li className={`list-container ${classNameVal}`}>
            <div className="center-view-feed">
                <div className="profile-container">
                    <img src={user_image} alt="user profile" className='profile-img' />
                </div>
                <div>
                    <h5>{name}</h5>
                    <p>{timeAgo(time)}</p>
                </div>
            </div>
            <div>
                <p>{description}</p>
            </div>
            <ul className='media-un-order-list-container'>
                {media.map(eachItem => {
                    if (eachItem.type === "image") {
                        classNameVal = true;
                        return (
                            <li>
                                <img src={eachItem.url} alt="url" className='media-list-image'/>
                            </li>
                        )
                    }else {
                        return (
                            <li>
                                <video controls className='video-container'>
                                    <source src={eachItem.url} type="video/mp4" />
                                </video>
                            </li>
                        )
                    }
                })}
            </ul>
            <div className="like-share-container">
                <div className="feed-like-container">
                    <FaHeart /> {likes}
                </div>
                <div>
                    <SharePopup />
                </div>
            </div>
        </li>
    )
}

export default FeedCard
