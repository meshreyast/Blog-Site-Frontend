import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../context/Context';

const Navbar = () => {

    const { user, dispatch } = useContext(Context);
    const PF = 'http://localhost:5000/images/';


    const handleLogout = (e) => {
        dispatch({ type: "LOGOUT" });
    };

    return (
        <div className='navbar'>
            <div className='nav-icons'>
                <i className="icon fa-brands fa-square-facebook"></i>
                <i className="icon fa-brands fa-square-twitter"></i>
                <i className="icon fa-brands fa-square-pinterest"></i>
                <i className="icon fa-brands fa-square-instagram"></i>
            </div>
            <div className='nav-center' >
                <ul className='list' >
                    <li className='list-item'>
                        <Link className='link' to='/'>HOME</Link>
                    </li>
                    <li className='list-item'>
                        <Link className='link' to='/about'>ABOUT</Link>
                    </li>
                    <li className='list-item'>
                        <Link className='link' to='/contact'>CONTACT</Link>
                    </li>
                    <li className='list-item'>
                        <Link className='link' to='/write'>WRITE</Link>
                    </li>
                    <li
                        className='list-item'
                        onClick={handleLogout}
                    >
                        {user && 'LOGOUT'}
                    </li>
                </ul>
            </div>
            <div className='nav-search'>
                {
                    user ? (
                        <Link to='/settings'>
                            <img className='nav-img' src={PF + user.profilePic} alt='profilepic' />
                        </Link>
                    ) : (
                        <ul className='list'>
                            <li className='list-item'>
                                <Link className='link' to='/login'>LOGIN</Link>
                            </li>
                            <li className='list-item'>
                                <Link className='link' to='/register'>REGISTER</Link>
                            </li>
                        </ul>
                    )
                }
                <i className="navSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}

export default Navbar