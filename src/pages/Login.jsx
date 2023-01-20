import React, { useContext, useRef, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import { Context } from '../context/Context';

const Login = () => {

    const [error, setError] = useState(false);
    const userRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isFetching } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError(false)

        dispatch({ type: "LOGIN_START" });

        try {
            const res = await axios.post("/auth/login", {
                username: userRef.current.value,
                password: passwordRef.current.value,
            });
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE" });
            setError(true)
        }
    };

    return (
        <div className='login'>
            <span className='loginTitle'>Login</span>
            {error && <span className='warning'>Wrong credentials!</span>}
            <form className='loginForm' onSubmit={handleSubmit}>
                <label>Username</label>
                <input
                    type='text'
                    className='loginInput'
                    placeholder='Enter your username...'
                    ref={userRef}
                />
                <label>Password</label>
                <input
                    type='password'
                    className='loginInput'
                    placeholder='Enter your password...'
                    ref={passwordRef}
                />
                <button
                    className='loginButton'
                    type='submit'
                    disabled={isFetching}
                >
                    Login
                </button>
            </form>
            <span className='registerText'>New to this site?</span>
            <button className='loginRegisterButton'>
                <Link className='link' to='/register'>Register</Link>
            </button>
        </div>
    )
}

export default Login