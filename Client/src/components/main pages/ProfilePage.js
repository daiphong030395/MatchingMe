import React from 'react'
import { Card, Col, Row, View, Mask, CardImage, CardBody, CardTitle, CardText, CardFooter, Button} from 'mdbreact';
import src1 from '../../image/baby.jpg';
// import {NavLink, Redirect} from 'react-router-dom';
// import Profile from '../Pages/Profile';
// import PostForm from './post-form/PostFormLittle';

export default class ProfilePage extends React.Component {
constructor(props){
    super(props);
    this.state = {
        'onEdit' : false,
        user : JSON.parse(localStorage.getItem("user")),
        'province':'',
        "posts": []
    }
}

  componentDidMount(){
    //API get all post
    fetch("http://localhost:8080/MatchingMe/get-posts/"+this.state.user.id)
        .then(response => response.json())
        .then(data => {
          console.log('ComponentDidMount-state.data: ',data);
          let posts = [];
          data.map(post => {
            posts.push(post)
              return posts
          })
          this.setState({
              "posts" : posts
          });
          // console.log('ComponentDidMount-state.data: ',this.state.posts);
        })
        .catch(error=>{
          alert("Lỗi hệ thống");
          console.log('Rollback-Error: ',error)
        })
  }
  onHandleClick= () =>{
    this.setState({
      isDisplay: !this.state.isDisplay
    })
  }
  //RIGHT
  displayRight= () =>{
    if(this.state.user.idRight === 1){
        return <p>Admin</p>
    } else {
        if(this.state.user.idRight === 2){
            return <p>Gia sư</p>
        } else {
            return <p>Gia chủ</p>
        }
    }
}
  render(){
    const user = this.state.user;
    const temple = "Tôi là một gia sư có 3 năm kinh nghiệm. Hiện tôi đang là sinh viên năm cuối trường đại học Quy Nhơn.";
    const post = {
        "idUser": 6,
        "type": "FindTutor",
        "area": "Quy Nhơn, Bình Định",
        "address_detail": "123 Hùng Vương",
        "sessions": 2,
        "idClass": 1,
        "phoneNumber": 974123458,
        "idSubject": 6,
        "salary": 200000,
        "title": "Tìm gia sư nữ đã tốt nghiệp dạy Toán Văn lớp 3",
        "status": true,
        "description": "Yêu cầu nhiệt tình",
        "address_area": "Quy Nhơn, Bình Định",
        "sessionsPerWeek": 2
    }
  return (
    <React.Fragment>
        <Row className="justify-content-center">
        <Col sm="12" md="6" lg="3" className="mb-5">
            <Card>
                <CardImage className="img-fluid" src={src1} />
                <CardBody>
                <CardTitle className="text-center mb-2 font-bold">{user.name}</CardTitle>
                      <CardTitle sub className="text-center indigo-text mb-2 font-bold">{this.displayRight()}</CardTitle>
                      <CardText>
                          <strong className="mb-2">Giới thiệu: </strong>
                          {user.description}
                      </CardText>
                    <div className="row justify-content-end pr-1">
                    <a href="/profile1">
                      <Button size="sm" onClick={this.onHandleClick} outline color="primary">Xem thêm </Button>
                    </a>
                    </div>
                </CardBody>
            </Card>
        </Col>
        <Col md="6" lg="9">
        <section className="text-center pb-3">
        <p className="btn btn-primary">Các bài Post {user.name} đã đăng</p>
          <Row className="d-flex justify-content-center">

          {/* <PostForm post={post}></PostForm> */}
          <ChildPost post={post}></ChildPost>
          {
          this.state.posts.map((row,index)=>{
            return <ChildPost key={index} post={row} />
          })
          } 
          
          </Row>
        </section>
      </Col>
    </Row>
    </React.Fragment>
  );
  }
}
class ChildPost extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      subject : '',
      class: ''
    }
  }
  componentDidMount(){
    switch(this.props.post.idSubject) {
      case 1: this.setState({ "subject": "Toán" });
      break;
      case 2: this.setState({ "subject": "Java" });
      break;
      case 4: this.setState({ "subject": "Vật Lý" });
      break;
      case 5: this.setState({ "subject": "Hóa học" });
      break;
      case 6: this.setState({ "subject": "Ngữ Văn" });
      break;
      case 7: this.setState({ "subject": "Ngoại ngữ (Anh)" });
      break;
    };
    switch(this.props.post.idClass) {
      case 1: this.setState({ "class": "Tiểu học" });
      break;
      case 2: this.setState({ "class": "Trung học cơ sở" });
      break;
      case 3: this.setState({ "class": "Trung học phổ thông" });
      break;
      case 4: this.setState({ "class": "Khác" });
      break;
    }
  }
  render(){
  return(
    <Col lg="6" xl="5" className="mb-3">
      <Card className="d-flex mb-5">
        <View>
          <img src="https://mdbootstrap.com/img/Mockups/Horizontal/6-col/pro-profile-page.jpg" alt="Post" className="img-fluid"/>
          <Mask overlay="white-slight"/>
        </View>
        <CardBody>
          <CardTitle className="font-bold mb-3">
            <strong>{this.props.post.title}</strong>
          </CardTitle>
          <CardText>{this.state.subject}</CardText>
          <CardText>{this.state.class}</CardText>
        </CardBody>
        <CardFooter className="links-light profile-card-footer">
          <span className="right">
            <a className="p-2" href="./" target="_blank">
              Xem chi tiết
            </a>
          </span>
        </CardFooter>
      </Card>
    </Col>
  )
}
}

          {/* <Row className="d-flex justify-content-center">
            <Col lg="6" xl="5" className="mb-3">
              <Card className="d-flex mb-5">
                <View>
                  <img src="https://mdbootstrap.com/img/Mockups/Horizontal/6-col/pro-profile-page.jpg" alt="Project" className="img-fluid"/>
                  <Mask overlay="white-slight"/>
                </View>
                <CardBody>
                  <CardTitle className="font-bold mb-3">
                    <strong>Project name</strong>
                  </CardTitle>
                  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                </CardBody>
                <CardFooter className="links-light profile-card-footer">
                  <span className="right">
                    <a className="p-2" href="#profile">
                      Live Preview
                      <Fa icon="photo" className="ml-1"/>
                    </a>
                  </span>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="6" xl="5" className="mb-3">
              <Card className="d-flex mb-5">
                <view-wrapper>
                  <img src="https://mdbootstrap.com/img/Mockups/Horizontal/6-col/pro-signup.jpg" alt="Project" className="img-fluid"/>
                  <Mask overlay="white-slight"/>
                </view-wrapper>
                <CardBody>
                  <CardTitle className="font-bold mb-3">
                    <strong>Project name</strong>
                  </CardTitle>
                  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                </CardBody>
                <CardFooter className="links-light profile-card-footer">
                  <span className="right">
                    <a className="p-2" href="#profile">
                      Live Preview
                      <Fa icon="photo" className="ml-1"/>
                    </a>
                  </span>
                </CardFooter>
              </Card>
            </Col>
          </Row> */}

            {/* <Col lg="6" xl="5" className="mb-3">
              <Card className="d-flex mb-5">
                <View>
                  <img src="https://mdbootstrap.com/img/Mockups/Horizontal/6-col/pro-profile-page.jpg" alt="Project" className="img-fluid"/>
                  <Mask overlay="white-slight"/>
                </View>
                <CardBody>
                  <CardTitle className="font-bold mb-3">
                    <strong>Project name</strong>
                  </CardTitle>
                  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                </CardBody>
                <CardFooter className="links-light profile-card-footer">
                  <span className="right">
                    <a className="p-2" href="#profile">
                      Live Preview
                      <Fa icon="photo" className="ml-1"/>
                    </a>
                  </span>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="6" xl="5" className="mb-3">
              <Card className="d-flex mb-5">
                <View>
                  <img src="https://mdbootstrap.com/img/Mockups/Horizontal/6-col/pro-signup.jpg" alt="Project" className="img-fluid"/>
                  <Mask overlay="white-slight"/>
                </View>
                <CardBody>
                  <CardTitle className="font-bold mb-3">
                    <strong>Project name</strong>
                  </CardTitle>
                  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                </CardBody>
                <CardFooter className="links-light profile-card-footer">
                  <span className="right">
                    <a className="p-2" href="#profile">
                      Live Preview
                      <Fa icon="photo" className="ml-1"/>
                    </a>
                  </span>
                </CardFooter>
              </Card>
            </Col> */}
