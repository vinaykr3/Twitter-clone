import React from 'react'
import { useSelector } from 'react-redux';

const Posts = () => {
    const state = useSelector(state => state);
    const { usersData } = state;
    return (
        <div className='postss'>
            {
                usersData && usersData.map((curElem, index) => {
                    return (
                        <div key={index}>
                            <div className="postss__first">
                                <div className="postss__first__img">
                                    <img src="/images/user_image.png" alt="profile image" />
                                </div>
                                <div className="postss__first__name">{
                                    curElem.userName ? <strong>{curElem.userName}</strong>
                                        : <strong>Twitter User</strong>}
                                    <i className="far fa-check-circle verify"></i>
                                </div>
                                <div className="postss__first__username">@amritkrsingh@gmil.com <span>6m</span></div>
                            </div>
                            <div className="postss__details">
                                <div className="postss__details__msg">
                                    {curElem.UserText}
                                </div>
                                <div className="postss__details__img">
                                    <img src={curElem.imgUrl} alt="india cricket-team" />
                                </div>
                                <div className="reaction">
                                    <span><i className="far fa-comment re"></i>23</span>
                                    <span><i className="fas fa-retweet re"></i>323</span>
                                    <span><i className="far fa-heart re"></i>45</span>
                                    <span><i className="fas fa-upload re"></i>47</span>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Posts
