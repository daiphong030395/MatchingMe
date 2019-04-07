import React from 'react'
import { Card, Col, Row, CardImage, CardBody, CardTitle, CardText,  Button} from 'mdbreact';
import src1 from '../../image/baby.jpg';
import TableUsers from '../admin-components/TableUsers';
import TableFBs from '../admin-components/TableFeedbacks';
import TablePosts from '../admin-components/TablePosts';
import MailForm from '../admin-components/MailForm';

export default class ProfilePageAdmin extends React.Component {
constructor(props){
    super(props);
    this.state = {
        able : false,
        user : JSON.parse(localStorage.getItem("user")),
        isToFeedbacks: false,
        isToUsers: false,
        isToPosts: false,
        isToMailForm: false
    }
}

  componentDidMount(){
      console.log("HIHI")
    //Check Admin
    if(this.state.user.idRight === 1){
        this.setState({able: true})
    } else {
        this.setState({able: false})
    }

  }
  onHandleClick= () =>{
    console.log("ABLE", this.state.able);
  }

    //HANDLE CLICK
  //1.click to able Feedback Table
  clickToFBTable(){
      console.log("1-OK")
    this.setState({isToFeedbacks: !this.state.isToFeedbacks})
  }
  //2.click to able User Table
  clickToUserTable(){
    this.setState({isToUsers: !this.state.isToUsers})
  }
  //2.click to able Posts Table
  clickToPostTable(){
    this.setState({isToPosts: !this.state.isToPosts})
  }
  //3.click to able Mail Table
  clickToMailForm(){
    this.setState({isToMailForm: !this.state.isToMailForm})
  }

  render(){
    const user = this.state.user;
    
  return (
    <React.Fragment>
        <Row className="justify-content-center">
        <Col sm="12" md="6" lg="3" className="mb-5">
            <Card>
                <CardImage className="img-fluid" src={src1} />
                <CardBody>
                <CardTitle className="text-center mb-2 font-bold">{user.name}</CardTitle>
                <CardTitle sub className="text-center indigo-text mb-2 font-bold">ADMIN: {user.username}</CardTitle>
                <CardText>
                    <strong className="mb-2">Giới thiệu: </strong>
                    {user.description}
                </CardText>
                <CardText>Đây là trang cá nhân Admin của hệ thống. Những chức năng này chỉ thực hiện khi bạn là Admin.</CardText>
                <div className="row justify-content-end pr-1">
                <a href="/profile1">
                    <Button size="sm" onClick={this.onHandleClick} outline color="primary">Xem thêm </Button>
                </a>
                </div>
                </CardBody>
            </Card>
        </Col>
        <Col md="6" lg="9">
        {this.state.able
            ?<section className="text-center pb-3">
                <Row className="justify-content-center bg-success"><h3> <b>The admin's main functions</b></h3></Row>
                <Row className="d-flex justify-content-center">
                    <Button onClick={this.clickToFBTable.bind(this)}>Check Feedback</Button> </Row>
                <Row className="justify-content-center " >
                    <Button onClick={this.clickToUserTable.bind(this)} >List All Users</Button></Row>
                <Row className="justify-content-center" >
                    <Button onClick={this.clickToPostTable.bind(this)} > List All Posts</Button></Row>
                <Row className="justify-content-center" >
                    <Button onClick={this.clickToMailForm.bind(this)} > Send mail to user</Button></Row>
            </section>
            : null
        }
      </Col>
    </Row>
    <Row className="justify-content-center">
        
        {(this.state.isToFeedbacks)
        ?<TableFBs />
        :null}
        
    </Row>
    <Row className="justify-content-center">
        {(this.state.isToUsers)
        ?<TableUsers />
        :null}
    </Row>
    <Row className="justify-content-center">
    {(this.state.isToPosts)
        ?<TablePosts />
        :null}
    </Row>
    <Row className="justify-content-center">
    {(this.state.isToMailForm)
        ?<MailForm />
        :null}
    </Row>
    
    </React.Fragment>
  );
  }
}