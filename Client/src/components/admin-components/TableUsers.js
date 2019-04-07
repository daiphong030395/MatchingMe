import React, {Component} from 'react';
import {Button, CardHeader } from 'mdbreact';
import { Card, CardBody, Table, TableBody, TableHead, Row, Col } from 'mdbreact';
import { MDBInput } from 'mdbreact';

export default class TableUsers extends Component{
    constructor(){
        super();
        this.state = {
          data : [],
          id:0
        }
      }

    componentDidMount(){
        fetch("http://localhost:8080//MatchingMe/users")
        .then(response => response.json())
        .then(data => {
            let users = [];
            data.map(row => {
                users.push(row)
                return users
            })
            this.setState({
                data : users
            });
            console.log('ComponentDidMount-state.data: ',this.state.data);
        })
        .catch(error=>{
            console.log('Rollback-Error: ',error)
        })
    }
    displayRight= (idRight) =>{
        if(idRight === 1){
            return <p>Admin</p>
        } else {
            if(idRight === 2){
                return <p>Gia sư</p>
            } else {
                return <p>Gia chủ</p>
            }
        }
    }

    
    onHandleChange(event){
        this.setState({ [event.target.name]: event.target.value });
        console.log("onChange");
    }

    onHandleClick(){
        console.log("onHandleClick");
    }

    render(){
        return(
        <Row className="mb-4">
        <Col md="12">
            <Card>
                <CardHeader>
                    <MDBInput
                        label="Tìm kiếm User theo id" group type="text" validate 
                        error="wrong" success="right" 
                        name="id"
                        onChange={this.onHandleChange}
                    />
                    <Button onClick={this.onHandleClick} > Search </Button>
                </CardHeader>
                <CardBody>
                  <Table hover>
                    <TableHead color="blue lighten-4">
                   <tr>
                        <th>STT</th>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Right</th>
                        <th>Birthday</th>
                        <th>Email</th>
                        {/* <th>Facebook</th> */}
                        <th>Phone</th>
                        <th>ID Card</th>
                        <th>Gender</th>
                        {/* <th>Address</th> */}
                        {/* <th>Money</th> */}
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                    </TableHead>
                <TableBody>
                {
                this.state.data.map((value,index) => 
                    <tr key = {index}> 
                        <td>{index}</td>
                        <td>{value.id}</td>
                        <td>{value.name}</td>
                        <td>{value.username}</td>
                        <td>{this.displayRight(value.idRight)}</td>
                        <td>{Date(value.birthday)}</td>
                        <td>{value.email}</td> 
                        {/* <td>{value.facebook}</td>  */}
                        <td>{value.phone}</td> 
                        <td>{value.idCard}</td> 
                        <td>{value.gender}</td>
                        {/* <td>{value.address}</td> */}
                        {/* <td>{value.moneyAccount}</td> */}
                        <td>{String(value.status)}</td>
                        <td>
                            <Button>Update Status</Button>
                            <Button >Send Mail</Button>
                        </td>
                    </tr>
                )
                }
                </TableBody>
                    </Table>
                  </CardBody>
              </Card>
          </Col>
      </Row>
        )
    }
}