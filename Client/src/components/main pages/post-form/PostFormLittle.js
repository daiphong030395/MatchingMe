import React from 'react';
import { Card, CardBody, Fa, Col, CardText, CardTitle, Button, CardFooter } from 'mdbreact';

export default class Post extends React.Component{
  constructor(props){
    super(props);
    this.state  = {
      "post": this.props.post,
      "id": null,
      "status": this.props.post.status,
      "type": null,
      "subject": null,
      "class": null,
      "icon": null,
      "button": null,
      "isLogin": false
    }
  }

  componentDidMount(){
    //check User
    if(JSON.parse(localStorage.getItem("user") != null)){
      this.setState({"isLogin": true})
    }

    this.setState({"id": this.props.post.id});
    if (this.props.post.type === 'FindTutor'){
      this.setState({
        "icon":<Fa icon="leaf" className="primary-color"/>,
        "type": <b>TÌM GIA SƯ</b>
      })
    } else{
      this.setState({
        "icon":<Fa icon="star" className="warning-color"/>,
        "type": <b>TÌM HỌC SINH</b>
      })
    };
    if (!this.props.post.status){
      this.setState({
        "button": <Button onClick={this.setStatusPost}> Đăng kí nhận lớp </Button>
      })
    }else{
      this.setState({
        "button": <CardFooter>Đã giao</CardFooter>
      })
    };
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
      default:
    };
    switch(this.props.post.idClass) {
      case 1: this.setState({ "class": "Tiểu học" });
      break;
      case 2: this.setState({ "class": "Trung học cơ sơ" });
      break;
      case 3: this.setState({ "class": "Trung học phổ thông" });
      break;
      case 4: this.setState({ "class": "Khác" });
      break;
      default:
    }
  }

  setStatusPost = () => {
    // const user = JSON.parse(localStorage.getItem("user"));
    // const id = this.state.id;
    // console.log("ID user:" ,user.id);
    // console.log("ID post:" ,id);
    if (!this.state.isLogin){
      alert("Đăng nhập hoặc đăng kí để được nhận lớp.")
    } else {
      const user = JSON.parse(localStorage.getItem("user"));
      const id = this.state.id;
      if(window.confirm("Hãy đọc kĩ trước khi gửi yêu cầu. Người quản trị đang kiểm duyệt. Bạn vui lòng kiểm tra thông báo sau vài phút. ")){
          //API send Feedback from user
          fetch(' http://localhost:8080/MatchingMe//new/feedback',{
            // mode: "cors",
            method: "POST",
            headers:{ 
              "Access-Control-Allow-Origin": "*",
              'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
              "Allow-Credentials": true,
              'Accept': 'application/json',
              "Content-Type": "application/json"
            },
            body: JSON.stringify({"type": "Request Recieve", "content": "User id: "+ String(user.id) + " request recieve post id: " + String(id)})
          })
          this.setState({"status": false});
      }
    }
  }
    render(){
        return(
        <Col xl="4" md="6" className="mb-r">
          <Card className="cascading-admin-card bg-post-gs ">
              <div className="admin-up">
                {this.state.icon}
                <div className="data  ">
                  <CardText>{this.state.type}</CardText>
                  <h4>
                    <strong>$ {this.props.post.salary}/ buổi</strong>
                  </h4>
                </div>
              </div>
              <CardBody>
                <CardTitle className="center-red"> {this.props.post.title}</CardTitle>
                  <p><b>Môn dạy:</b> {this.state.subject} </p>
                  <p><b>Cấp học:</b> {this.state.class} </p>
                  <p> <b>Số buổi dạy:</b> {this.props.post.sessions} buổi/ tuần</p>
                  <p><b>Khu vực dạy:</b> {this.props.post.area}</p>
                  <p><b>Yêu cầu khác:</b> {this.props.post.description}</p>
              </CardBody>
              {this.state.button}
              
            </Card>
        </Col>
        )
    }
}