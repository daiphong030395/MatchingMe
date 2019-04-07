import React, {Component} from 'react';
import {Button, CardHeader,MDBInput } from 'mdbreact';
import { Card, CardBody, Table, TableBody, TableHead, Row, Col } from 'mdbreact';

export default class TablePosts extends Component{
    constructor(){
        super();
        this.state = {
          data : [],
        }
      }

    componentDidMount(){
        fetch("http://localhost:8080/MatchingMe/posts")
        .then(response => response.json())
        .then(data => {
            let posts = [];
            data.map(row => {
                posts.push(row)
                return posts
            })
            this.setState({
                data : posts
            });
            console.log('ComponentDidMount',this.state.data);
        })
        .catch(error=>{
            alert("Lỗi hệ thống.")
            console.log('Rollback-Error: ',error)
        })        
    }
    
    onHandleChange(event){
        this.setState({ [event.target.name]: event.target.value });
        console.log("onChange");
    }

    onHandleClick(){
        console.log("onHandleClick");
    }

    displayClass(idClass){
        switch(idClass) {
            case 1: return "Tiểu học";
            case 2: return "Trung học cơ sở" ;
            case 3: return "Trung học phổ thông";
            case 4: return  "Khác" ;
            default:
          }
    }

    displaySubject(idSubject){
        switch(idSubject) {
            case 1: return "Toán" ;
            case 2: return "Java" ;
            case 4: return "Vật Lý" ;
            case 5:return "Hóa học" ;
            case 6: return "Ngữ Văn" ;
            case 7: return "Ngoại ngữ (Anh)";
            default: 
          };
    }

    render(){
        return(
        <Row className="mb-4">
          <Col md="12">
              <Card >
                <CardHeader>
                    <MDBInput
                        label="Tìm kiếm Post theo id" group type="text" validate 
                        error="wrong" success="right" 
                        name="id"
                        onChange={this.onHandleChange}
                    />
                    <Button onClick={this.onHandleClick} > Search </Button>
                </CardHeader>
                <CardBody>
                    <Table hover>
                      <TableHead color="blue-grey lighten-4">
                        <tr>
                          <th>STT</th>
                          <th>ID</th>
                          <th>Loại</th>
                          <th>Môn</th>
                          <th>Lớp</th>
                          <th>Số điện thoại</th>
                          <th>Khu vực</th>
                          <th>Địa chỉ cụ thể</th>
                          <th>ID User gửi</th>
                          <th>ID User nhận</th>
                          <th>Trạng thái</th>
                          <th>Hành động</th>
                        </tr>
                      </TableHead>
                      <TableBody>
                        {this.state.data.map((value,index) => 
                            <tr key = {index}> 
                                <td>{index}</td>
                                <td>{value.id}</td>
                                <td>{value.type}</td>
                                <td>{this.displaySubject(value.idSubject)}</td>
                                <td>{this.displayClass(value.idClass)}</td>
                                <td>{value.phoneNumber}</td>
                                <td>{value.area}</td>
                                <td>{value.address_detail}</td>
                                <td>{value.idUser}</td>
                                <td>{value.userReceive}</td>
                                <td>{String(value.status)}</td>
                                <td>
                                    <Button>Update Status</Button>
                                    <Button>Update User Receive</Button>
                                </td>
                            </tr>
                        )}
                      </TableBody>
                    </Table>
                  </CardBody>
              </Card>
          </Col>
      </Row>
        )
    }
}