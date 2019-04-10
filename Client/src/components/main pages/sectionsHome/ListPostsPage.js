import React, { Component } from 'react';
import { Row } from 'mdbreact';
import ChildForm from '../post-form/PostFormLittle';
// import { MDBSelect, MDBSelectInput, MDBSelectOptions, MDBSelectOption} from 'mdbreact';

class AdminCardSection1 extends Component {
  constructor(){
    super();
    this.state = {
      posts: [],
      type: ''
    }
  }

  componentDidMount(){
    //API get all post
    this.getAll()
  }
  //API get all post
  getAll(){
    fetch("http://localhost:8080/MatchingMe/posts")
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
  //API get Post by Type 
  getByType(type){
    fetch("http://localhost:8080/MatchingMe/posts-by-type/" + type)
        .then(response => response.json())
        .then(data => {
          console.log('data: ',data);
          this.setState({
            posts: []
          })
          this.setState({
              posts : data
          });
          // console.log('ComponentDidMount-state.data: ',this.state.posts);
        })
        .catch(error=>{
            console.log('Rollback-Error: ',error)
        })
  }
  // API get Posts by Subject
  getBySubject(idSubject){
    fetch("http://localhost:8080/MatchingMe/posts-by-subject/" + idSubject)
        .then(response => response.json())
        .then(data => {
          console.log('data: ',data);
          this.setState({
            posts: []
          })
          this.setState({
              posts : data
          });
          // console.log('ComponentDidMount-state.data: ',this.state.posts);
        })
        .catch(error=>{
            console.log('Rollback-Error: ',error)
        })
     
  }

  handleChangeType(event){
    if(event.target.value === "All"){
      this.getAll();
    } else{
      console.log("type: ",event.target.value)
      this.getByType(event.target.value);
      console.log('state: ',this.state.posts)
    };
  }
  handleChangeSubject(event){
    console.log("get by id Subject: ",event.target.value);
    this.getBySubject(event.target.value);
  }

  render(){
    return (
      <div>
        <Row className="text-center font-weight-bold mx-auto pb-5 font-weight-light text-info">
          <h2>Bảng tin</h2>
          <select className="mdb-select md-form colorful-select dropdown-primary mg-sel" onChange={this.handleChangeType.bind(this)}>
            <option value="All">Hiển thị tất cả các bài đăng</option>
            <option value="FindTutor">Hiển thị tất cả các bài đăng tìm gia sư</option>
            <option value="FindHost">Hiển thị tất cả các bài đăng tìm học sinh</option>
          </select>
          <select className="mdb-select md-form colorful-select dropdown-primary " onChange={this.handleChangeSubject.bind(this)}>
            <option label="Hiển thị các bài đăng theo môn"></option>
            <option value="1">Toán</option>
            <option value="4">Lý</option>
            <option value="5">Hóa</option>
            <option value="6">Văn</option>
            <option value="7">Anh</option>
            <option value="2">Lập trình</option>
          </select>
        </Row>

        <Row className="mb-4 ">
          {
            this.state.posts.map((row,index)=>{
              return <ChildForm key={index} post={row} />
            })
          }
          {/* <ChildForm post = {post1}  />
          <ChildForm post = {post2}  /> */}

        </Row>
      </div>
    )
}
}
export default AdminCardSection1;

