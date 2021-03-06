import React, {useContext} from 'react';
import './style.css';
import { signInWithGoogle} from '../../services/auth.js';
import { UserContext } from '../../contexts/user';

export default function SignInBtn() {
    // eslint-disable-next-line no-unused-vars
    const [user, setUser] = useContext(UserContext).user;

    const signInBtnClick = async () => {
        let userBySignIn = await signInWithGoogle();
        if(userBySignIn) setUser(userBySignIn);
    };
    return (
        <div className='signInBtn' onClick={signInBtnClick}>
            <p>Sign in with Google</p>
        </div>
    );
}
