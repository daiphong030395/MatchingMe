import React, {Component} from 'react';
import { Card, Col, Row, CardImage, CardBody, CardTitle, CardText,Button } from 'mdbreact';
import src1 from '../../image/baby.jpg';
import EditProfile from './details/EditProfile';

export default class Profile extends Component{
    constructor(props){
        super(props);
        this.state = {
            'onEdit' : false,
            user : JSON.parse(localStorage.getItem("user")),
            'province':'',
            data: []
        }
    }
    componentDidMount(){
        // var user = JSON.parse(localStorage.getItem("user"));
        // console.log('id: ',user.id );
        console.log(this.state.user);
        // this.getAPI();
    }

    handleClick=()=>{
        // this.setState({
        //     'onEdit' : !this.state.onEdit
        // })
        // this.getAPI();
        console.log("handleClick");
    }
    // changeComponent=()=>{
    //     if(this.state.onEdit === true){
    //         return <EditProfile/>
    //     } else{
    //         return null
    //     }
    // }
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
    getAPI(){
        fetch(' http://localhost:8080//MatchingMe/province',{
          mode: "cors",
          method: "POST",
          headers:{ 
            // "Chrome Extension Allow-Control-Allow-Origin": '*',
            // "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
            "Access-Control-Allow-Origin": "http://localhost:3000",
            // 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
            // "Allow-Credentials": true,
            'Accept': 'application/json',
            "Content-Type": "application/json"
          },
          body: JSON.stringify({"matp": this.state.user.idProvince})
        })
        .then(Response => Response.json())
        .then(data => {
          console.log(data);
        //   this.setState({
        //       'province' : data.name
        //   })
        })
        .catch(function (err) {
          console.log(err);
        }); 
    }


    render(){
        const user = this.state.user;
        return(
            <React.Fragment>
                <h2>TRANG CÁ NHÂN</h2>
                    <p> Xin chào {user.name} </p>
            <Row className="justify-content-center">
            <Col sm="12" md="6" lg="6" className="mb-5">
                <Card>
                    <CardImage className="img-fluid" src={src1} />
                    <CardBody>
                        <CardTitle className="text-center mb-2 font-bold">{user.name}</CardTitle>
                        <CardTitle sub className="text-center indigo-text mb-2 font-bold">{this.displayRight()}</CardTitle>
                        <CardText>
                            <strong className="mb-2">Giới thiệu: </strong>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione perferendis quod animi dignissimos consectetur quibusdam numquam laboriosam, minus, provident...
                        </CardText>
                        <div className="row justify-content-end pr-1">
                            <Button size="sm" color="primary">Đổi ảnh đại diện</Button>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        
            <Col  sm="12" md="6" lg="6" className="mb-5">
                {/* <button onClick={this.handleClick} >Cập nhật thông tin cá nhân</button> */}
                {/* {this.changeComponent()} */}
                <section className="text-center pb-10">
                    <Card className="d-flex mb-10">
                        <EditProfile />
                    </Card>
                </section>
            </Col>
        </Row>
        </React.Fragment>
        )

    }
}