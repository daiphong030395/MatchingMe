import React, {Component} from 'react';
import {Button, CardHeader ,MDBInput } from 'mdbreact';
import { Card, CardBody, Table, TableBody, TableHead, Row, Col } from 'mdbreact';


export default class TableFeedbacks extends Component{
    constructor(){
        super();
        this.state = {
          data : [],
          id: 0
        }
      }

    componentDidMount(){
        fetch("http://localhost:8080//MatchingMe/feedbacks")
        .then(response => response.json())
        .then(data => {
            let feedbacks = [];
            data.map(row => {
                feedbacks.push(row)
                return feedbacks
            })
            this.setState({
                data : feedbacks
            });
            console.log('ComponentDidMount-state.data: ',this.state.data);
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

    
    render(){
        return(
        <Row>
            <Col md="12" className="mb-4">
            <Card>
                <CardHeader>
                    <MDBInput
                        label="Tìm kiếm Feedback theo id" group type="text" validate 
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
                        <th>Loại</th>
                        <th>Nội dung</th>
                        <th>Hành động</th>
                      </tr>
                    </TableHead>
                    <TableBody>
                        {this.state.data.map((value,index) => 
                            <tr key = {index}> 
                                <td>{index}</td>
                                <td>{value.id}</td>
                                <td>{value.type}</td>
                                <td>{value.content}</td>
                                <td>
                                    <Button>Remove</Button>
                                    <Button>Update</Button>
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