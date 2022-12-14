import React from 'react';
import pic from './images/pic-2.png' 

const SingleComment = (props) => {
    return(
        <div className='comment'>
                <a href="/" className='avatar'>
                    <img src={pic} alt="profile picture"/>
                </a>
            <div className='content'>
        <a href='/' className='author'>
        { props.name }
        </a>
        <div className='metadata'>
            <span className='date'>
                {props.date}
            </span>
        </div>
        <div className='text'>
            it's amazing
        </div>
            </div>
        </div>
    )
}

export default SingleComment;