import React, { Component } from 'react';
import { Row } from 'mdbreact';
import ChildForm from '../post-form/PostFormLittle';

class AdminCardSection1 extends Component {
  constructor(){
    super();
    this.state = {
      posts: []
    }
  }

  componentDidMount(){
    //API get all post
    fetch("http://localhost:8080//MatchingMe/posts")
        .then(response => response.json())
        .then(data => {
          // console.log('ComponentDidMount-state.data: ',data);
          let posts = [];
          data.map(post => {
            posts.push(post)
              return posts
          })
          this.setState({
              posts : posts
          });
          // console.log('ComponentDidMount-state.data: ',this.state.posts);
        })
        .catch(error=>{
            console.log('Rollback-Error: ',error)
        })
  }


  render(){
    return (
      <Row className="mb-4 ">

        {
          this.state.posts.map((row,index)=>{
            return <ChildForm key={index} post={row} />
          })
        }
        {/* <ChildForm post = {post1}  />
        <ChildForm post = {post2}  /> */}

      </Row>
    )
}
}
export default AdminCardSection1;

