import React, {Component} from 'react';
import { MDBFormInline, MDBInput, Button } from "mdbreact";
// import { Card, Col, Row, View, Mask, CardImage, CardBody, CardTitle, CardText, CardFooter, Button, Fa } from 'mdbreact';
// import src1 from '../../../image/baby.jpg';
export default class EditProfile extends Component{
    constructor(props){
        super(props);
        this.state = {
            user : JSON.parse(localStorage.getItem("user")),
            radio : 0,
            disableForm : true,
            name: '',
            email: '',
            phone: '',
            gender: '',
            idProvince: '',
            idcard: ''
        }
    }

    componentDidMount(){
        let gender = this.state.user.gender;
        if (gender === "Male"){
            this.setState({
                radio : 1
            });
        } else {
            this.setState({
                radio : 2
            });
        }
        this.setState({
            name: this.state.user.name,
            email: this.state.user.email,
            phone: this.state.user.phone,
            gender: this.state.user.gender,
            idProvince: this.state.user.idProvince,
            idcard: this.state.user.idCard
        })
        
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


    //HANDLE FORM INPUT
    handleChange = (evt) =>{
        console.log("HandleChange");
        this.setState({ [evt.target.name]: evt.target.value });
        console.log("name input change: ", evt.target.name);
        console.log("value input change: ", evt.target.value);
    }

    handleClick=()=>{
        console.log("handleClick: Edit Profile");
        this.setState({
            'disableForm' : !this.state.disableForm
        });
        if(this.state.disableForm === false){
            console.log("UPDATE DATA")
        }
        let user = this.state.user;
        user.name = this.state.name;
        user.email = this.state.email;
        user.phone = this.state.phone;
        user.gender = this.state.gender;
        user.idProvince = this.state.idProvince;
        user.idCard = this.state.idCard;
        this.setState({
            user: user
        });
        localStorage.setItem("user", JSON.stringify(user));
        
    }

    onClick = nr => () =>{
        this.setState({
          radio: nr
        });
      }

render(){
    const user = this.state.user;
    const address = user.idProvince.toString();
    return(
        <div>
            <table className="table table-bordered">
                <tbody>
                <tr>
					<th  width="20%" >Tên tài khoản</th>
					<td>
                        <input type="text" defaultValue = {user.username} name="username" id="usn" disabled />
                    </td>
				</tr>
				<tr>
					<th>Tên đầy đủ</th>
					<td>
                        <input type="text" defaultValue= {user.name} name="name" id="name" 
                            onChange={this.handleChange}        
                            disabled={this.state.disableForm} 
                        />
                    </td>
				</tr>
				<tr>
					<th>Mật khẩu</th>
					<td>
                        <input type="password"
						defaultValue={user.password} name="password" id="pass" disabled />
                    </td>
				</tr>
				<tr>
					<th>Email</th>
					<td>
                        <input type="text"
						defaultValue={user.email} name="email" id="email" disabled={this.state.disableForm}/>
                    </td>
				</tr>
				<tr>
					<th>Số điện thoại</th>
					<td>
                        <input type="text"
						defaultValue={user.phone} name="phone" id="phone" disabled={this.state.disableForm}/>
                    </td>
				</tr>
				<tr>
					<th>Giới tính</th>
					<td>
                        {/* <input type="text"
						defaultValue={user.gender} name="gender" /> */}
                        <MDBFormInline>
                            <MDBInput 
                                gap 
                                onClick={this.onClick(1)} 
                                checked={this.state.radio===1 ? true : false} 
                                label="Name" 
                                type="radio" 
                                id="radio1" 
                                disabled={this.state.disableForm}
                            />
                            <MDBInput 
                                gap 
                                onClick={this.onClick(2)} 
                                checked={this.state.radio===2 ? true : false} 
                                label="Nữ" 
                                type="radio" 
                                id="radio2"
                                disabled={this.state.disableForm}
                            />
                        </MDBFormInline>
                    </td>
				</tr>
                <tr>
					<th>Nơi ở (Tỉnh)</th>
					<td>
                        <input type="text"
						defaultValue={address} name="idProvince" disabled={this.state.disableForm} />
                    </td>
				</tr>
                <tr>
					<th>Số CMTND</th>
					<td>
                        <input type="text"
						defaultValue={user.idCard} name="idCard" disabled={this.state.disableForm} />
                    </td>
				</tr>
                </tbody>
			</table>
            {/* <button onClick={this.handleClick} >Chỉnh sửa</button>  */}
            <Button size="sm" color="primary" onClick={this.handleClick}>Chỉnh sửa</Button>
            </div>
    )
}

}

               