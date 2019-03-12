import React, {Component} from 'react';
// import { Card, Col, Row, View, Mask, CardImage, CardBody, CardTitle, CardText, CardFooter, Button, Fa } from 'mdbreact';
// import src1 from '../../../image/baby.jpg';
export default class EditProfile extends Component{
    constructor(props){
        super(props);
        this.state = {
            user : JSON.parse(localStorage.getItem("user"))
        }
    }

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
    return(
        <form>
            <table className="table table-bordered">
                {/* <thead className="thead-dark">
                    <tr>
                    <td>Username</td>
                    <td>Name</td>
                    <td>Ngày sinh</td>
                    <td>Giới tính</td>
                    <td>Email</td>
                    <td>Facebook</td>
                    <td>CMND</td>
                    <td>Nơi ở</td>
                    
                    </tr>
                </thead>
                 <tbody>
                    <tr> 
                        <td>{user.username}</td>
                        <td>{user.name}</td>
                        <td>{user.birthday}</td>
                        <td>{user.gender}</td>
                        <td>{user.email}</td>
                        <td>{user.facebook}</td>
                        <td>{user.idCard}</td>
                        <td></td>
                    </tr>
                </tbody> */}
                <tbody>
                <tr>
					<th  width="20%" >Tên tài khoản</th>
					<td>
                        <input type="text" defaultValue = {user.username} name="usn" id="usn" disabled />
                    </td>
				</tr>
				<tr>
					<th>Tên đầy đủ</th>
					<td>
                        <input type="text" defaultValue= {user.name} name="name" id="name" />
                    </td>
				</tr>
				<tr>
					<th>Mật khẩu</th>
					<td>
                        <input type="password"
						defaultValue={user.password} name="pass" id="pass" disabled />
                    </td>
				</tr>
				<tr>
					<th>EMAIL</th>
					<td>
                        <input type="text"
						defaultValue={user.email} name="email" id="email" />
                    </td>
				</tr>
				<tr>
					<th>Số điện thoại</th>
					<td>
                        <input type="text"
						defaultValue={user.phone} name="phone" id="phone" />
                    </td>
				</tr>
				<tr>
					<th>Giới tính</th>
					<td>
                        <input type="text"
						defaultValue={user.gender} name="gender" />
                    </td>
				</tr>
                <tr>
					<th>Nơi ở</th>
					<td>
                        <input type="text"
						defaultValue={user.address} name="address" />
                    </td>
				</tr>
                <tr>
					<th>Số CMTND</th>
					<td>
                        <input type="text"
						defaultValue={user.idCard} name="idCard" />
                    </td>
				</tr>
                </tbody>
			</table>
            </form>
    )
}

}