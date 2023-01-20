import React from 'react'
import { contactImg } from '../constants'

const Contact = () => {
    return (
        <div className='contact'>
            <div className='contactWrapper'>
                <div className='contactImgContainer'>
                    <img className='contactImg' src={contactImg} alt='' />
                </div>
                <div className='contactInfo'>
                    <div className='allWrapper'>
                        <h1 className='cTitles'>Get in Touch</h1>
                        <div className='ephone'>
                            <p className="ephoneInfo">hello@world.com</p>
                            <p className="ephoneInfo">5861763219</p>
                        </div>
                        <div className='address'>
                            <h1 className='cTitles'>Address</h1>
                            <p className="ephoneInfo">Shaitan galli, Khatra mahal, Andher Nagar, Near Shamshan</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact