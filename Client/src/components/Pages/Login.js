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
      msg: null
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
      mode: "cors",
      method: "POST",
      headers:{ 
        // 'Access-Control-Allow-Origin':'',
        // 'Accept': 'application/json',
        "Content-Type": "application/json"
      },
      body: JSON.stringify({"username": this.state.username, "password": this.state.password})
    })
    .then(Response => Response.json())
    // .then( (response) => {
    //   console.log(response);
    //   return response.json();
    // })
    .then(data => {
      console.log(data);
      if (data.id !== undefined) {
        console.log("ID: ",data.id);
        localStorage.setItem("user", JSON.stringify(data));
        this.setState({
          msg: 'Hello ' + data.name
        });
        console.log("state.msg: ",this.state.msg);
        
      // this.props.onLogin(true);
      } else{
        this.setState({
          msg: 'Not correct'
        });
      }
    })
    .catch(function (err) {
      console.log(err);
    }); 
  }

  onSubmitLogin = (event) => {
    event.preventDefault();
    console.log('onSubmitLogin');
    console.log(JSON.stringify({"Username": this.state.username, "Password": this.state.password}));
    this.getAPI();
    
  }
  displayNotification(){
    if(this.state.msg !== null){
      if(this.state.msg === false){
        return(<p>Sai mật khẩu hoặc tên đăng nhập.</p>);
      } else{
        return(<Redirect 
          to={{
            pathname: "/profile",
            search: "?usn=" + this.state.username
          }}
        />)
      }
    } 
    else {  
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
                <label
                  htmlFor="defaultFormEmailEx"
                  className="grey-text font-weight-light"
                >
                  Tên đăng nhập
                </label>
                <input
                  type="text"
                  id="defaultFormEmailEx"
                  className="form-control"
                  onChange = {this.handleUsernameChange.bind(this)}
                />
  
                <label
                  htmlFor="defaultFormPasswordEx"
                  className="grey-text font-weight-light"
                >
                  Mật khẩu
                </label>
                <input
                  type="password"
                  id="defaultFormPasswordEx"
                  className="form-control"
                  onChange = {this.handlePasswordChange.bind(this)}
                />
  
                <div className="text-center mt-4">
                  <MDBBtn color="deep-orange" className="mb-3" type="submit"  onClick ={this.onSubmitLogin}>
                    Đăng nhập
                  </MDBBtn>
                </div>
  
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