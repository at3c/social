import React from 'react';
import s from './Posts.module.css';

const Posts = () => {
    return (
        <div className={s.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgek701-Ebaxr5CDun6VY2mP-GMNuoM8DozXtArgE0B1T_QysN"
                alt=""/>
            post1
            <div>
                <span>like</span>
            </div>
        </div>
    );
}

export default Posts;