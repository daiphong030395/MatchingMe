import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, MDBCardHeader } from 'mdbreact';
// import {Checkbox, CheckboxGroup} from 'react-checkbox-group';
import { Redirect} from 'react-router-dom';

class RegisterForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            phone : 0,
            email: '',
            name:'',
            password:'',
            confirmPassword:'',
            idRight: null,
            isInputValid: false,
            status: false
        }
    
    }

//ONCHANGE: Handle Input Change
onHandleChange = (event) => {
    console.log('onHandleChange');
    // console.log(this.state)
    this.setState({ [event.target.name]: event.target.value });
} 

//ON BLUR: Check username in Database
checkUsername = () =>{
    //Call API to check username
    //if it exited then get object{status: false} else {status:false} 
    fetch('http://localhost:8080/MatchingMe/check-user-by-username',{
            mode: "cors",
            method: "PUT",
            headers:{ 
                "Access-Control-Allow-Origin": "*",
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
                'Accept': 'application/json',
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ "username": this.state.username })
        })
        .then(Response => Response.json())
        .then(data => {
            console.log("HEHE", data);
            if(data.username != null){
                this.setState({
                    isInputValid: false
                });
                alert("Tên đăng nhập này đã tồn tại. Bạn hãy đổi sang một tên đăng nhập khác.");
            } else{
                this.setState({
                    isInputValid: true
                })
            }
        })
        .catch(function (err) {
            console.log(err);
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
//ONBLUR: Handle Confirm Password
onHandleConfirmPassword = (event) => {
    console.log("Validation for Phone Number", event);
    if(this.state.password !== this.state.confirmPassword){
        this.setState({
            isInputValid: false
        })
        alert("Mật khẩu không trùng khớp. Vui lòng nhập lại mật khẩu.");
    } else{
        this.setState({
            isInputValid: true   
        })
    }
}

// Change value Radio box for right name
// onClick = nr => () =>{
//     console.log("change right: ", nr)
//     this.setState({
//         right: nr
//     });
//   }

//SUBMIT: Handle Submit Form Input
onHandleSubmit = (event) =>{
    console.log('onHandleSubmit function');
    if(this.state.username === '' || this.state.phone === '' || this.state.idRight === 0 || this.state.password === '' || this.state.name === ''){
        this.setState({
            isInputValid: false
        })
        alert("Vui lòng điền đầy đủ các mục đăng kí.")
    } else { 
        if(!this.state.isInputValid){
            alert("Đăng kí chưa hợp lệ. Hãy kiểm tra lại thông tin của bạn.")
        } else{
            this.setState({
                'status': true
            })
            //call API to create new user
            fetch('http://localhost:8080/MatchingMe/new/user',{
                mode: "cors",
                method: "POST",
                headers:{ 
                    "Access-Control-Allow-Origin": "*",
                    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
                    "Allow-Credentials": true,
                    'Accept': 'application/json',
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({  "username": this.state.username, 
                                        "password": this.state.password,
                                        "name": this.state.name,
                                        "email": this.state.email,
                                        "phone": this.state.phone,
                                        "idRight": this.state.idRight
                })
            })
            .then(Response => Response.json())
            .then(data => {
                console.log("HEHE", data);
                alert("Đăng kí thành công. Vui lòng đăng nhập");
                
            })
            .catch(function (err) {
                console.log(err);
            }); 
        }
        event.preventDefault();
    }

}
//Register Success, Ridirect  to Login Page
redirectToLogin(){
    if(this.state.status){
        return(
            <Redirect 
            to={{
                pathname: "/login"
            }}
            />
        )
    } else{
        return null
    }
}


render(){
    return(
        <MDBContainer>
            {this.redirectToLogin()}
            <form onSubmit={this.onHandleSubmit} >
            <MDBRow >
                <MDBCol md="8" className="pl-100">
                    {/* <p className="h5 text-center mb-4">Sign up</p> */}
                        <MDBCardHeader className="form-header warm-flame-gradient rounded">
                            <h3 className="text-center my-3">
                                <b>ĐĂNG KÝ</b>
                            </h3>
                        </MDBCardHeader>
                        <p className="text-center">Điền vào mẫu sau để tạo mới một tài khoản.</p>
                        <hr></hr>
                        <div className="grey-text">
                            {/* Username */}
                            <MDBInput
                                label="Tên tài khoản" icon="user" group type="text" validate 
                                error="wrong" success="right" 
                                name="username"
                                onChange={this.onHandleChange}
                                onBlur = {this.checkUsername}
                            />

                            {/* Name */}
                            <MDBInput
                                label="Tên đầy đủ" icon="pencil" group type="text" validate 
                                error="wrong" success="right" 
                                name="name"
                                onChange={this.onHandleChange}
                            />
                            {/* Phone */}
                            <MDBInput
                                label="Số điện thoại" icon="phone-square" group type="tel"
                                validate error="wrong" success="right"
                                name="phone"
                                onChange={this.onHandleChange}
                                onBlur={this.handlePhoneValidation}
                            />

                            {/* Email */}
                            <MDBInput
                                label="Email" icon="envelope" group type="email"
                                validate error="wrong" success="right"
                                name="email"
                                onChange={this.onHandleChange}
                            />

                            {/* Password */}
                            <MDBInput
                                label="Mật khẩu" icon="lock" group type="password"
                                validate
                                name="password"
                                onChange={this.onHandleChange}
                            />
                            <MDBInput
                                label="Xác nhận mật khẩu" icon="reply" group type="password"
                                validate
                                name="confirmPassword"
                                onChange={this.onHandleChange}
                                onBlur={this.onHandleConfirmPassword}
                            />
                        </div>

                        
                        <div>
                            <label>Bạn là <b> Gia sư </b>
                                    hay <b> Phụ huynh học sinh</b> ?</label>
                        
                        <div>
                            <div>
                                <input 
                                    type='radio' 
                                    name='idRight' 
                                    value={2}
                                    checked={this.state.idRight==="2" ? true : false}
                                    onChange={this.onHandleChange}
                                    // onClick={this.onClick(2)}
                                />
                                <label>Gia sư</label>
                            </div>

                            <div className='pear-item'>
                                <input 
                                    type='radio' 
                                    name='idRight' 
                                    value={3}
                                    checked={this.state.idRight==="3" ? true : false}
                                    onChange={this.onHandleChange}
                                    // onClick={this.onClick(3)}
                                />
                                <label className='pear-label'>Gia chủ</label>
                            </div>
                        </div>
                        
                        
                        </div>
                        <div>
                            {/* <MDBInput label="Filled-in unchecked" checked type="checkbox" id="checkbox2" />    */}
                            <input 
                                type="checkbox" 
                                defaultChecked="true" 
                                onChange={this.onHandleChange} 
                                id="checkbox" />
                            Khi tạo tài khoản thì bạn đã đồng ý với 
                                <a href="./#" > Điều khoản và Bảo mật của chúng tôi</a>.  {/* style="color: dodgerblue" */}
                        </div>
                        
                        <div className="text-center mt-4">
                            <MDBBtn color="deep-orange" className="mb-3" type="submit">
                                Đăng ký
                            </MDBBtn>
                        </div>
                </MDBCol>
            </MDBRow>
            </form>
        </MDBContainer>
    );
}
}
export default RegisterForm;
                