import React from 'react';
import './style.css';
import { signInWithGoogle} from '../../services/auth.js';

export default function SignInBtn() {
    const [user, setUser] = useState();

    const signInBtnClick = async () => {
        let userBySignIn = await signInWithGoogle();
        if(userBySignIn) setUser(userBySignIn);
    };
    return (
        <div className='signInBtn'>
            <p>Sign in with Google</p>
        </div>
    );
}
