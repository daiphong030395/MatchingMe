import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBModalFooter, MDBIcon, MDBCardHeader, MDBBtn
} from "mdbreact";
import {NavLink, Redirect} from 'react-router-dom';
// import Profile from "./Profile";

class FormLogin extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      username : "",
      password : "",
      isLogin: false
    }
  }
  handleUsernameChange(event){
    this.setState({username: event.target.value});
    // console.log('handleUsernameChange_state-username: '+ this.state.username);
  }

  handlePasswordChange(event){
    this.setState({password: event.target.value});
    // console.log('handlePasswordChange_state-password: '+ this.state.password);
  }
  
  getAPI(){
    fetch('http://localhost:8080//MatchingMe/login',{
      // mode: "no-cors",
      method: "POST",
      headers:{ 
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
        "Access-Control-Allow-Origin": "*",
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
        "Allow-Credentials": true,
        'Accept': 'application/json',
        "Content-Type": "application/json"
      },
      body: JSON.stringify({"username": this.state.username, "password": this.state.password})
    })
    .then(Response => Response.json())
    .then(data => {
      console.log(data);
        localStorage.setItem("user", JSON.stringify(data));
        this.setState({
          isLogin: true
        })
        alert("Xin chào "+data.username+". Bạn đã đăng nhập thành công.")
    })
    .catch(function (err) {
      alert("Tên đăng nhập hoặc mật khẩu không đúng. Vui lòng kiểm tra lại.")
      console.log(err);
    }); 
    // window.location.reload();
  }

  onSubmitLogin = (event) => {
    event.preventDefault();
    console.log('onSubmitLogin');
    // console.log(JSON.stringify({"Username": this.state.username, "Password": this.state.password}));
    this.getAPI();
    
  }
  displayNotification(){
      if(this.state.isLogin){
        // window.location.reload();
        alert("Vui lòng nhấn F5 sau khi trở về trang chủ.")
        return(<Redirect  to={{ pathname: "/" }} />)
      } else {  
        return(null);
    }
    
  }
  render(){
    return(
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <MDBCard>
              <MDBCardBody>
                <MDBCardHeader className="form-header warm-flame-gradient rounded">
                  <h3 className="my-3">
                    <MDBIcon icon="lock" /> Đăng nhập
                  </h3>
                </MDBCardHeader>
                <div>
                  {this.displayNotification()}
                </div>

                <form onSubmit={this.onSubmitLogin}>
                  <label htmlFor="defaultFormEmailEx" className="grey-text font-weight-light">
                    Tên đăng nhập
                  </label>
                  <input type="text" id="defaultFormEmailEx" className="form-control" onChange = {this.handleUsernameChange.bind(this)}/>
                  <label  htmlFor="defaultFormPasswordEx" className="grey-text font-weight-light">
                    Mật khẩu
                  </label>
                  <input type="password"  id="defaultFormPasswordEx" className="form-control" onChange = {this.handlePasswordChange.bind(this)} />
                  <div className="text-center mt-4">
                    <MDBBtn color="deep-orange" className="mb-3" type="submit">
                      Đăng nhập
                    </MDBBtn>
                  </div>
                </form>

                <MDBModalFooter>
                  <div className="font-weight-light">
                    <p>Bạn không phải thành viên? 
                        <NavLink to="./signup"> Hãy đăng ký</NavLink>
                    </p>
                    <p>Bạn đã quên mật khẩu?</p>
                  </div>
                </MDBModalFooter>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      
    )
  }
}

export default FormLogin;