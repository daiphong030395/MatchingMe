import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, MDBCardHeader } from 'mdbreact';
import InputRadio from './details/RadioButton';
 
class FormSignup extends React.Component{

onHandleChange = (event) => {
    console.log('onHandleChange function_event:', event.target.value);
}
onHandleSubmit = () =>{
    console.log('onHandleSubmit function:');
}
render(){
    return(
        <MDBContainer>
            <MDBRow >
                <MDBCol md="6">
                    {/* <p className="h5 text-center mb-4">Sign up</p> */}
                        <MDBCardHeader className="form-header warm-flame-gradient rounded">
                            <h3 className="my-3">
                                ĐĂNG KÝ
                            </h3>
                        </MDBCardHeader>
                        <p>Điền vào mẫu sau để tạo mới một tài khoản.</p>
                        <hr></hr>
                        <div className="grey-text">
                            <MDBInput
                                label="Tên tài khoản" icon="user" group type="text" validate 
                                error="wrong" success="right" 
                                name="username"
                                onChange={this.onHandleChange}
                            />
                            <MDBInput
                                label="Số điện thoại" icon="phone-square" group type="tel"
                                validate error="wrong" success="right"
                                name="phone"
                            />
                            <MDBInput
                                label="Email" icon="envelope" group type="email"
                                validate error="wrong" success="right"
                            />
                            <MDBInput
                                label="Mật khẩu" icon="lock" group type="password"
                                validate
                            />
                            <MDBInput
                                label="Xác nhận mật khẩu" icon="lock" group type="password"
                                validate
                            />
                        </div>
                        <div>
                            <label>Bạn là <b> Gia sư </b>
                                    hay <b> Phụ huynh học sinh</b> ?</label>
                            <InputRadio /> 
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
                            <MDBBtn color="deep-orange" className="mb-3" type="submit" onSubmit={this.onHandleSubmit}>
                                Đăng ký
                            </MDBBtn>
                        </div>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}
}
export default FormSignup;
                