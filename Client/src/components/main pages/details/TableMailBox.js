import React, {Component} from 'react';
// import {Button } from 'mdbreact';

export default class Table extends Component{
    constructor(){
        super();
        this.state = {
          data : [],
          user : JSON.parse(localStorage.getItem("user"))
        }
      }

    componentDidMount(){
        fetch("http://localhost:8080//MatchingMe/mailboxes/"+ this.state.user.id)
        .then(response => response.json())
        .then(data => {
            let mails = [];
            data.map(row => {
                mails.push(row)
                return mails
            })
            this.setState({
                data : mails
            });
            console.log('ComponentDidMount-state.data: ',this.state.data);
        })
        .catch(error=>{
            console.log('Rollback-Error: ',error)
        })
        
    }
    
    render(){
        return(
            <form>
                <table className="table table-bordered">
                <thead className="thead-dark">
                    <tr>
                    <td>STT</td>
                    <td>Type</td>
                    <td>Content</td>
                    </tr>
                </thead>
                <tbody>
                {
                this.state.data.map((value,index) => 
                    <tr key = {index}> 
                        <td>{index}</td>
                        <td>{value.type}</td>
                        <td>{value.content}</td>
                    </tr>
                )
                }
                </tbody>
                </table>
            </form>
        )
    }
}