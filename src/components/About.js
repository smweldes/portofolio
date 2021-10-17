import React from 'react'
import './main.css'

function About() {
    return (
        <div className='about-main'>
            <div className="about-left">
                <div className="left-card"></div>
                <div className="left-card">
                    <img className="i-img" src="https://i.ibb.co/9YpG5yH/dev.jpg" alt="" />
                </div>
            </div>
            <div className="about-right">
                <h1 className="right-title"> About Me</h1>
                <p className="sub">
                Hi! I am Aryan Twanju, a web designer/developer focused on crafting great 
                web experiences. Designing and Coding have been my passion since the days 
                I started working with computers but I found myself into web design/development 
                since 2007. I enjoy creating beautifully designed, intuitive and functional websites.

                For over past 8 years, I have worked for some of the best digital agencies and 
                wonderful clients to create some award winning works. And, I can make this happen 
                for your business as well.
                </p>
                <div className="right-award">
                    <img className="about-RightImage" src="https://i.ibb.co/ydvvsp2/award.jpg" alt=""></img>
                    <div className="right-award-text">
                        <h4 className="right-award-title">International Design</h4>
                        <p className="right-award-desc">Description is the pattern of narrative development that aims to 
                        make vivid a place, object, character, or group. Description is one of four rhetorical modes, along 
                        with exposition, argumentation, and narration.</p>
                     </div>
                </div>
                
            </div>
        </div>
    )
}

export default About
