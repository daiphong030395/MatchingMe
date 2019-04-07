import React, {Component} from 'react';
import { MDBInput, Button } from "mdbreact";
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
            idCard: '',
            address:'',
            description: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
            idcard: this.state.user.idCard, 
            address: this.state.user.address,
            description: this.state.description
        });
        // this.getAddress();
    }
    //Available, still working but not use idProvince, idDistrict, idTown
    // getAddress(){
    //     fetch(' http://localhost:8080//MatchingMe/getAddress',{
    //       mode: "cors",
    //       method: "POST",
    //       headers:{ 
    //         "Access-Control-Allow-Origin": "*",
    //         // 'Accept': 'application/json',
    //         'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
    //         "Content-Type": "application/json"
    //       },
    //         body: JSON.stringify({  "idProvince": this.state.user.idProvince,
    //                                 "idDistrict": this.state.user.idDistrict,
    //                                 "idTown": this.state.user.idTown })
    //     })
    //     .then(Response => Response.json())
    //     .then(data => {
    //       console.log(data);
    //       this.setState({
    //           'address' : data.address,
    //           'town'    : data.nameTown,
    //           'district': data.nameDistrict,
    //           'province': data.nameProvince
    //       })
    //     //   console.log(this.state.address);
    //     })
    //     .catch(function (err) {
    //       console.log(err);
    //     }); 
    // }

    //HANDLE FORM INPUT
    handleChange = (evt) =>{
        // console.log("HandleChange");
        this.setState({ [evt.target.name]: evt.target.value });
        console.log("Input change: ", evt.target.name);
        // console.log("value input change: ", evt.target.value);
    }
    //HANDLE Radio Input
    onClick = nr => () =>{
        this.setState({
          radio: nr
        });
    }
    //ONBLUR: Handle validation Input Value of Phone Number
    handlePhoneValidation = (event) =>{
        console.log("Validation for Phone Number", event);
        let l = this.state.phone.length;
        if ((l >12) || (l<10))  {
            this.setState({
                isInputValid: false
            });
            alert("Không hợp lệ. Vui lòng nhập lại số điện thoại");
        } else{
            this.setState({
                isInputValid: true
            })
        }
    }
    //BUTTON UPDATE 
    handleSubmit=()=>{
        console.log("handleSubmit: Edit Profile");
        this.setState({
            'disableForm' : !this.state.disableForm
        });
        if(this.state.disableForm === true){
            console.log("AVAILABLE UPDATE");            
        } else {
            //Set value input for state user
            let user = this.state.user;
            user.name = this.state.name;
            user.email = this.state.email;
            user.phone = this.state.phone;
            user.gender = this.state.gender;
            user.idProvince = this.state.idProvince;
            user.idCard = this.state.idCard;
            user.address = this.state.address;
            user.description = this.state.description;
            this.setState({
                user: user
            });
            localStorage.setItem("user", JSON.stringify(this.state.user));
            
            //Transmission Data to Update
            fetch('http://localhost:8080/MatchingMe/user/'+ this.state.user.id,{
            mode: "cors",
            method: "PUT",
            headers:{ 
                "Access-Control-Allow-Origin": "*",
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
                "Content-Type": "application/json"
              },
            body:  JSON.stringify(this.state.user)
            })
            .then(Response => Response.json())
            .then(data => {
                // console.log('http://localhost:8080/MatchingMe/user/'+ this.state.user.id)
                alert("Cập nhật thành công.")
                console.log('RESPONSE(data): ',data);
            })
            .catch(function (err) {
            console.log(err);
            }); 
            console.log("UPDATED")
            // alert('A name was submitted: ' + this.state.user.name);
            // event.preventDefault();
        }
    }

    render(){
        const user = this.state.user;
        var bday = new Date();
        bday = Date(this.state.user.birthday);
        const temple = "Chưa có mô tả. Hãy cho mọi người biết bạn là ai? Kinh nghiệm giảng dạy hay những yêu cầu của bạn khi tìm gia sư.";

    return(
        <div >
            <table className="table">
                <tbody>
                <tr>
					<th  width="20%" >Tên tài khoản</th>
					<td>
                        {/* <input type="text" defaultValue = {user.username} name="username" id="usn" disabled /> */}
                        <MDBInput
                            label={user.username} group type="text" validate 
                            error="wrong" success="right" 
                            name="username"
                            defaultValue = {user.username}
                            disabled
                        />
                    </td>
				</tr>
				<tr>
					<th>Tên đầy đủ</th>
					<td>
                        {/* <input type="text" defaultValue= {user.name} name="name" id="name" 
                            onChange={this.handleChange}        
                            disabled={this.state.disableForm} 
                        /> */}
                        <MDBInput
                            label={user.name} group type="text" validate 
                            error="wrong" success="right" 
                            name="name"
                            defaultValue= {user.name}
                            onChange={this.handleChange}        
                            disabled={this.state.disableForm}
                        />
                    </td>
				</tr>

                <tr>
					<th  width="20%" >Lời giới thiệu</th>
					<td>
                        {/* <input type="text" defaultValue = {user.username} name="username" id="usn" disabled /> */}
                        <MDBInput
                            label={(user.description != null) ?user.description :temple} group type="text" validate 
                            error="wrong" success="right" 
                            name="description"
                            defaultValue = {user.description}
                            disabled ={this.state.disableForm}
                        />
                    </td>
				</tr>

				{/* <tr>
					<th>Mật khẩu</th>
					<td> */}
                        {/* <input type="password"  defaultValue={user.password}  name="password" id="pass" disabled /> */}
                        {/* <MDBInput
                            label="Mật khẩu" group type="password"
                            validate
                            name="password"
                            defaultValue={user.password}
                            disabled
                        />
                    </td>
				</tr> */}
                <tr>
					<th>Ngày sinh</th>
					<td>
                        {/* {this.state.user.birthday} */}
                        {/* {bday} */}
                        <MDBInput
                            label={bday} group type="text"
                            validate
                            name="birthday"
                            defaultValue={bday}
                            disabled
                        />
                    </td>
				</tr>
				<tr>
					<th>Email</th>
					<td>
                        {/* <input type="text"
                        defaultValue={user.email} name="email" id="email" 
                        onChange={this.handleChange}  
                        disabled={this.state.disableForm}/> */}
                        <MDBInput
                            label={user.email} group type="email"
                            validate error="wrong" success="right"
                            name="email"
                            defaultValue={user.email}
                            onChange={this.onHandleChange}
                            disabled={this.state.disableForm}
                        />
                    </td>
				</tr>
				<tr>
					<th>Số điện thoại</th>
					<td>
                        {/* <input type="text"
                        defaultValue={user.phone} name="phone" id="phone" 
                        onChange={this.handleChange}  
                        disabled={this.state.disableForm}/> */}
                        <MDBInput
                            label={user.phone}  group type="tel"
                            validate error="wrong" success="right"
                            name="phone"
                            defaultValue={user.phone}
                            onChange={this.onHandleChange}
                            onBlur={this.handlePhoneValidation}
                            disabled={this.state.disableForm}
                        />
                    </td>
				</tr>
				<tr>
					<th>Giới tính</th>
					<td >
                        {/* <input type="text"
						defaultValue={user.gender} name="gender" /> */}
                        <div className=" pear-item form-check form-check-inline">
                            <MDBInput 
                                gap 
                                onClick={this.onClick(1)} 
                                checked={this.state.radio===1 ? true : false} 
                                label="Nam" 
                                type="radio" 
                                id="radio1" 
                                value="Male"
                                disabled={this.state.disableForm}
                            />
                            <MDBInput 
                                gap 
                                onClick={this.onClick(2)} 
                                checked={this.state.radio===2 ? true : false} 
                                label="Nữ" 
                                type="radio" 
                                id="radio2"
                                value="Female"
                                disabled={this.state.disableForm}
                            />
                        </div>
                    </td>
				</tr>
                <tr>
					<th>Nơi ở</th>
					<td>
                        {/* <input type="text"
                            width = "150"
                            defaultValue={this.state.town} name="idTown" 
                            disabled={true}
                        />
                        <br />
                        <input type="text"
                            width = "150"
                            defaultValue={this.state.district} name="idDistrict" 
                            disabled={true} 
                        />
                        <br />
                        <input type="text"
                            width = "150"
                            defaultValue={this.state.province} name="idProvince" 
                            disabled={true} 
                        /> */}
                        <MDBInput
                            label={user.address} group type="text" validate 
                            error="wrong" success="right" 
                            name="address"
                            defaultValue={this.state.address}
                            onChange={this.handleChange}        
                            disabled={this.state.disableForm}
                        />
                    </td>
				</tr>
                <tr>
					<th>Số CMTND</th>
					<td>
                        {/* <input type="text"
                        defaultValue={user.idCard} name="idCard" id="idCard" 
                        onChange={this.handleChange}  
                        disabled={this.state.disableForm} /> */}
                        <MDBInput
                            label={user.idCard} group type="text" validate 
                            error="wrong" success="right" 
                            name="idCard"
                            defaultValue={user.idCard}
                            onChange={this.handleChange}        
                            disabled={this.state.disableForm}
                        />
                    </td>
				</tr>
                </tbody>
			</table>
            <Button type="submit" size="sm" color="primary" onClick={this.handleSubmit} >Chỉnh sửa</Button>
        </div>
        );
        
    }

    }


               