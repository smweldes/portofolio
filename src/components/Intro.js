import React from 'react'
import "./main.css"

function Intro() {
    return (
        <div className='i'>
            <div className='i-left'>
                <div className='i-left-wrapper'>
                      <h2 className='i-intro'>Hi, my name is</h2>
                      <h1 className='i-name'>John David</h1>
                      <div className='i-title'>
                           <div className='i-title-wrapper'>
                                <div className='i-title-item'>Web Developer</div>
                                <div className='i-title-item'>UI/UX Designer</div>
                                <div className='i-title-item'>Photographer</div>
                                <div className='i-title-item'>Writer</div>
                                <div className='i-title-item'>Content Creator</div>
                           </div>
                      </div>
                      <div className='i-desc'>
                         I design and develop services for customers of all sizes, <br/>
                         specialization in creating stylish modern website, web services <br/>
                         and online stores.
                      </div>
                </div>
            </div>
            <div className='i-right'>
                <div className='i-right-wrapper'>
                    <div className='i-right-image'>
                        {/* <img src= "https://i.ibb.co/yQhL5fN/messi1.jpg" alt="messi"></img> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro
