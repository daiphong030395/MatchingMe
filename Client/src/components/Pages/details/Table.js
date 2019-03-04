import React, {Component} from 'react';

export default class Table extends Component{
    constructor(){
        super();
        this.state = {
          data : [],
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

    render(){
        return(
            <form>
                <table className="table table-bordered">
                <thead className="thead-dark">
                    <tr>
                    <td>ID</td>
                    <td>Username</td>
                    <td>Password</td>
                    <td>Birthday</td>
                    <td>Name</td>
                    <td>ID RIGHT</td>
                    </tr>
                </thead>
                <tbody>
                {
                this.state.data.map((value,index) => 
                    <tr key = {index}> 
                        <td>{value.id}</td>
                        <td>{value.username}</td>
                        <td>{value.password}</td>
                        <td>{value.birthday}</td>
                        <td>{value.name}</td>
                        <td>{value.idRight}</td>
                    </tr>
                )
                }
                </tbody>
                </table>
            </form>
        )
    }
}