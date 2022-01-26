import React from 'react'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <ul>
                <li><a href=""><i className="fab fa-twitter logo icons"></i></a></li>
                <li><a href=""><i className="fas fa-house-user logo icons"></i>Home</a></li>
                <li><a href=""><i className="fas fa-hashtag icons"></i>Explore</a></li>
                <li><a href=""><i className="far fa-bell icons"></i>Notifications</a></li>
                <li><a href=""><i className="far fa-envelope icons"></i>Messages</a></li>
                <li><a href=""><i className="far fa-bookmark icons"></i>Bookmarks</a></li>
                <li><a href=""><i className="far fa-list-alt icons"></i>Lists</a></li>
                <li><a href=""><i className="far fa-user icons"></i>Profile</a></li>
                <li><a href=""><i className="fas fa-ellipsis-v icons"></i>More</a></li>
                <div className="sidebar__Btn">
                    <a href="">Profile</a>
                </div>
            </ul>
        </div>
    )
}

export default Sidebar
