import React from 'react';
import { Card, CardBody, Fa, Col, CardText, CardTitle, Button, CardFooter} from 'mdbreact';
import utf8 from 'utf8';

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "post": this.props.post,
      "id": null,
      "status": this.props.post.status,
      "type": null,
      "subject": null,
      "class": null,
      "icon": null,
      "button": null,
      "isLogin": false,
      "idUser": null
    }
    this.onHandleChange = this.onHandleChange.bind(this);
  }

  componentWillMount() {
    console.log(this.props.post.address_detai)
    //check User
    if (JSON.parse(localStorage.getItem("user") != null)) {
      this.setState({ "isLogin": true })
    }

    this.setState({ "id": this.props.post.id });
    if (this.props.post.type === 'FindTutor') {
      this.setState({
        "icon": <Fa icon="leaf" className="primary-color" />,
        "type": <b>TÌM GIA SƯ</b>
      })
    } else {
      this.setState({
        "icon": <Fa icon="star" className="warning-color" />,
        "type": <b>TÌM HỌC SINH</b>
      })
    };
    if (!this.props.post.status) {
      this.setState({
        "button": <Button onClick={this.setStatusPost}> Nhận lớp </Button>
      })
    } else {
      this.setState({
        "button": <CardFooter>Đã giao</CardFooter>
      })
    };
    switch (this.props.post.idSubject) {
      case 1: this.setState({ "subject": "Toan" });
        break;
      case 2: this.setState({ "subject": "Lap trinh" });
        break;
      case 4: this.setState({ "subject": "Vat Ly" });
        break;
      case 5: this.setState({ "subject": "Hoa hoc" });
        break;
      case 6: this.setState({ "subject": "Ngu van" });
        break;
      case 7: this.setState({ "subject": "Ngoai ngu (Anh)" });
        break;
      default:
    };
    switch (this.props.post.idClass) {
      case 1: this.setState({ "class": "Tieu hoc" });
        break;
      case 2: this.setState({ "class": "THCS" });
        break;
      case 3: this.setState({ "class": "THPT" });
        break;
      case 4: this.setState({ "class": "Khác" });
        break;
      default:
    }
  }

  //ON CLICK: send mail
  sendPost = () => {
    let idPost = this.state.id;
    let idUser = this.state.idUser;
    if (this.state.idUser !== null) {
      console.log("SEND POST ", idPost, "TO USER ", idUser)
      fetch(utf8.encode('http://localhost:8080/MatchingMe/mailbox/new', {
        mode: "cors",
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "type": "THONG TIN LOP DA DANG KY NHAN"
            , "idUser": idUser
            , "content": "ID Post: " + String(idPost)
                      + "| Mon: " + String(this.state.subject)
                      + "| Tieu de:" + String(this.state.post.title)
                      + "| Cap hoc:" + String(this.state.class)
                      + "| Luong: " + String(this.props.post.salary)
                      + "| So buoi day: " + String(this.props.post.sessions) +" buoi/ tuan"
                      + "| Khu vực day: " + this.props.post.address_detail + ", " + this.props.post.area
                      + "| So dien thoai: 0" + String(this.props.post.phoneNumber)
        })
      }))
        .catch(error => {
          alert("Lỗi hệ thống. Chưa gửi được.")
          console.log('Rollback-Error: ', error)
        })
      this.setState({ "status": false });
      alert("Gửi thành công.")
    } else {
      alert("Nhập ID của user cần gửi thông tin.")
    }
  }
  //ON CLICK: CANCEL
  cancel(){
    console.log("CANCEL SEND");
  }

  //ON CHANGE INPUT
  onHandleChange(event) {
    this.setState({ "idUser": event.target.value });
  }

  render() {
    var post = this.props.post;
    return (
      <Col>
        <Card className="cascading-admin-card bg-send-post">
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
            <CardTitle className="center-red"> {post.title}</CardTitle>
            <p><b>ID Post:</b> {post.id}</p>
            <p><b>Tiêu đề Post:</b>{post.title}</p>
            <p><b>Môn dạy:</b> {this.state.subject} </p>
            <p><b>Cấp học:</b> {this.state.class} </p>
            <p> <b>Số buổi dạy:</b> {post.sessions} buổi/ tuần</p>
            <p><b>Khu vực dạy:</b> {post.area}</p>
            <p><b>Chi tiết khu vực dạy: </b>{post.address_detail}</p>
            <p><b>Số điện thoại: </b> {post.phoneNumber}</p>
            <label>ID User yêu cầu nhận:</label>
            <input
              type="text"
              name="idUser"
              className="w-p-input"
              onChange={this.onHandleChange}
            />
          </CardBody>
          <Button className="ml-50 w-150" onClick={this.sendPost.bind(this)} >Gửi Mail</Button>
        </Card>

      </Col>
    )
  }
}