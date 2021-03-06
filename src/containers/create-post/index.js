import React, { useContext, useState } from 'react';
import './style.css';
import { SignInBtn } from '../../components';
import { UserContext } from '../../contexts/user';
import { db, storage } from '../../firebase';
import makeId from '../../helper/functions';
import firebase from 'firebase';

export default function CreatePost() {
    const [user, setUser] = useContext(UserContext).user;
    const [caption, setCaption] = useState('');

    const [image, setImage] = useState(null);

    const handleChange = (e) => {
        if(e.target.files[0]){  
            setImage(e.target.files[0]);
            var selectedImageSrc = URL.createObjectURL(e.target.files[0]);
            var imagePreview = document.getElementById('image-preview');
            imagePreview.src= selectedImageSrc;
            imagePreview.style.display = 'block';
        }
    }
    const handleUpload = () => {
        if(image) {
            var imageName = makeId(10);
            const uploadTask = storage.ref(`images/${imageName}.jpg`)
            .put(image);
            uploadTask.on('state_changed',()=> {
                storage.ref('images').child(`${imageName}.jpg`)
                .getDownloadURL()
                .then((imageURL) => {
                    db.collection('posts').add({
                        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                        caption:caption,
                        photoURL: imageURL,
                        username: user.email.replace('@gmail.com',''),
                        userURL: user.photoURL
                        })
                    });

                    setCaption('');
                    setImage(null);

                    document.getElementById('image-preview').style.display = 'none';
                }
            );
        }
    }

    return (
        <div className='createPost'>
            {user ? (
                <div className='createPost_loggedIn'>
                    <p>Create Post</p> 
                    <div className='createPost_loggedInCenter'>
                        <textarea className='createPost_textarea' rows='3' value={caption} onChange={(e) =>setCaption(e.target.value)} placeholder='Enter Caption Here' />                            
                        <div className='createPost_imagePreview'>
                            <img id='image-preview' alt='' />
                        </div>
                    </div>
                    <div className='createPost_loggedInBottom'>
                        <div classname='createPost_imageUpload'>
                            <label htmlFor='fileInput'>
                                Photo
                            </label>
                            <input id='fileInput' type='file' accept='image/*' onChange={handleChange} /> 
                        </div> 
                        <button className='createPost_uploadBtn' onClick={handleUpload} style={{color: caption ? 'black':'lightgray'}}>Upload</button>
                    </div>
                </div> ) : ( <div>
                    <SignInBtn />
                    <p style={{marginLeft: '12px'}}>to Post & Comment</p>
                </div>
            )}
        </div>
    )
};
