import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Sidebar = () => {

    const [cats, setCats] = useState([]);
    const catsTrial = new Set(cats);


    useEffect(() => {
        try {
            const getCats = async () => {
                const res = await axios.get("/categories")
                setCats(res.data);
            };
            getCats()
        } catch (err) { };
    }, [])


    return (
        <div className='sidebar'>
            <div className='sidebarItem'>
                <span className='sidebarTitle'>About Me</span>
                <img src='https://images.unsplash.com/photo-1587317996237-eddd7e834d84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' alt='' />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='sidebarItem'>
                <span className='sidebarTitle'>Categories</span>
                <ul className='sidebarList'>
                    {catsTrial.map(c => (
                        <Link className='link' to={`/?cat=${c.name}`}>
                            <li className='sidebarListItem'>{c.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className='sidebarItem'>
                <span className='sidebarTitle'>Follow Us</span>
                <div className='sidebarSocial'>
                    <i className="sidebarIcon fa-brands fa-square-facebook"></i>
                    <i className="sidebarIcon fa-brands fa-square-twitter"></i>
                    <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
                    <i className="sidebarIcon fa-brands fa-square-instagram"></i>
                </div>
            </div>
        </div>
    )
}

export default Sidebar