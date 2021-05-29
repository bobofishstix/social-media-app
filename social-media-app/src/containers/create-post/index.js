import React, { useContext, useState } from 'react';
import './style.css';
import { SignInBtn } from '../../components';
import { UserContext } from '../../contexts/user';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';

export default function CreatePost() {
    const [user, setUser] = useContext(UserContext).user;
    const [caption, setCaption] = useState('');
const handleChange = () => {}

    return (
        <div className='createPost'>
            {user ? (
                <div className='createPost_loggedIn'>
                    <p>CreatePost</p> 
                    <div className='createPost_loggedInCenter'>
                        <textarea className='createPost_textarea' rows='3' value={caption} onChange={(e) =>setCaption(e.target.value)}>
                            
                        </textarea>
                    </div>
                    <div classname='createPost_imageUpload'>
                        <label htmlFor='fileInput'>
                        <AddAPhotoIcon style={{cursor:'pointer',fontSize:'20px'}}/>
                        </label>
                        <input type='file' accept='image/*' onChange={handleChange}></input>
                    </div>
                </div> ) : ( <div>
                    <SignInBtn />
                    <p style={{marginLeft: '12px'}}>to Post & Comment</p>
                </div>
            )}
        </div>
    )
};
