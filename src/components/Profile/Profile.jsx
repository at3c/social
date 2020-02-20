import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Warrenpoint_red_sky.jpg/400px-Warrenpoint_red_sky.jpg"
                    alt="sea"/>
            </div>
            <div>
                ava + discription
            </div>
            <MyPosts/>
        </div>
    );

}

export default Profile;