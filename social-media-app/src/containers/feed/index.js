import React, {useEffect, useState} from 'react';
import './style.css';
import { Post } from '..';
import firebase, {db} from '../../firebase';


export default function Feed() {

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        db.collection('posts').onSnapshot((snapshot) => 
        {
            setPosts(snapshot.docs.map((doc) => ({id: doc.id, post:doc.data()})));
        });
    }, []);

    return (
        <div className='feed'>
            {posts.map(({id, post}) => {
                return <Post
                key={id}
                id={id}
                profileURL={post.profileURL}
                username={post.username}
                photoURL={post.photoURL}
                caption={post.caption}
                comment={post.comments}
                />

            })}
        </div>
    )
}
