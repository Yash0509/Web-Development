import React from 'react';
import  ReactDOM  from 'react-dom';
import pic from './images/pic-2.png';
import SingleComment from './SingleComment';
import UserCard from './UserCard';
const App = () => {
    return(
        <div className='ui comment'>
            <UserCard>
            <SingleComment name='Alex' date='today at 5:00pm'/>
            </UserCard>
            <UserCard><SingleComment name='Jack' date='today at 6:00pm'/></UserCard>
            <UserCard><SingleComment name='Sarah' date='today at 7:00pm'/></UserCard>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)