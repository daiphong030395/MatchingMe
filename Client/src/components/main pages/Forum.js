import React from 'react';
// import src from '../../image/hs-nu.jpg'

export default class Forum extends React.Component {
    render(){
        return(
            <div className="bg-img">
            <h1 className="text-primary"><b>Forum Page</b></h1>
            {/* <img src={src} alt="Student" /> */}
            <a href="https://www.facebook.com/groups/651292148398894/?ref=br_rs" className="text-primary" target="_blank" rel="noopener noreferrer">
            Tham gia  nhóm </a>
            để trao đổi cùng cộng đồng
            </div>
        )
    }
} 