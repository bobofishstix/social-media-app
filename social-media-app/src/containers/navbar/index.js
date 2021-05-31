import React, {useState, useContext} from 'react';
import './style.css';
import { SignInBtn } from '../../components';
import { UserContext } from '../../contexts/user';

export default function Navbar() {
    const [user, setUser] = useContext(UserContext).user;
    return ( 
        <div className='navbar'>
            <div className='navbar-left'>
                <img className='navbar-logo' src='https://th.bing.com/th/id/OIP.Q5inIO_EbwSo2Pj5vHFIDAHaDw?pid=ImgDet&w=840&h=426&rs=1' alt='BreadBook Logo'></img>
                <p className='navbar-text'>BreadBook</p>
            </div>
            {user ? <img className='navbar-img' src={user.photoURL}></img> : <SignInBtn />}
        </div>
    )
}
