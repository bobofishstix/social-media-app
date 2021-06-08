import React, {useState, useContext} from 'react';
import Comment from '../../components/comment';
import CommentInput from '../../components/commentinput';
import { db, storage } from '../../firebase';
import './style.css';

export default function Post ({userURL, username, id, photoURL, caption, comments}) {

    const deletePost = () => {
        // delete image from firebase storage

        // get ref to image file to delete
        var imageRef = storage.refFromURL(photoURL);

        // delete file
            imageRef.delete().then(function(){
                console.log('delete successful');
            })
            .catch(function(error){
                console.log(`Error ${error}`);
            });
        // delete post info from firebase firestore
            db.collection('posts').doc(id).delete() .then(function () {
                console.log('delete post info successful');
            })
            .catch(function (error) {
                console.log(`Error post info delete ${error}`);
            });
    }

    return(
        <div className='posts'>
            <div className='posts_header'>
                <div className='posts_headerLeft'>
                    <img className='posts_profilePic' src={userURL} />
                    <p style={{marginLeft:'8px'}}>{username}</p>
                </div>
                <button className='posts_delete' onClick={deletePost}>Delete</button>
            </div>
            <div className='posts_center'>
                <img className='posts_photoURL' src={photoURL} />
            </div>
            <div>
                <p>
                    <span style={{fontWeight:'500', marginRight:'4px'}}>{username}</span>
                    {caption}
                </p>
            </div>
            {comments ? comments.map((comment) => <Comment username={comment.username} caption={comment.comment} />) : <></>}
          <CommentInput comments={comments} id={id}/>
        </div>
    );
}
