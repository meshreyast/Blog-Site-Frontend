import React from 'react'
import { aboutDesc } from '../constants'
import pic from '../images/about.jpg'

const About = () => {

    return (
        <div className='about'>
            <div className='aboutWrapper'>
                <div className='aboutTitleBox'>
                    <h1 className='aboutTitle'>Every idea needs a <span>Blog Site.</span></h1>
                </div>
                <div className='aboutInfo'>
                    <div className='aboutDesc'><h4>{aboutDesc}</h4></div>
                    <div className='aboutPicContainer'>
                        <img className='aboutPic' src={pic} alt='' />
                    </div>
                </div>
                <div className='aboutFooter'>
                    <h1>Blog Site</h1>
                </div>
            </div>
        </div>
    )
}

export default About