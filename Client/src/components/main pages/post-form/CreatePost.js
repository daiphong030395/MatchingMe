import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, MDBCardHeader } from 'mdbreact';
import { Redirect} from 'react-router-dom';

export default class NewPost extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        type: 'FindTutor',
        idUser : 0,
        area: '',
        address_detail:'',
        sessions:'',
        idClass: 0,
        idSubject: 0,
        phoneNumber: 0,
        salary: 0,
        title: 0,
        description: '',
        isInputValid: false,
        isRedirect: false
    }
  }

  componentDidMount(){
    this.setState({
      idUser:  JSON.parse(localStorage.getItem("user")).id
    })
  }

  //ONCHANGE: Handle Input Change
    onHandleChange = (event) => {
      console.log('onHandleChange');
      console.log(event.target.name,'Change')
      this.setState({ [event.target.name]: event.target.value });
    }
  //ONBLUR: Handle validation Input Value of Phone Number
    handlePhoneValidation = (event) =>{
      console.log("Validation for Phone Number", event);
      let l = this.state.phoneNumber.length;
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
//SUBMIT: Handle Submit Form Input
onHandleSubmit = (event) =>{
  console.log('onHandleSubmit function');
  if(this.state.type === '' || this.state.arae === '' || this.state.sessions === '' || this.state.title === ''){
      this.setState({
          isInputValid: false
      })
      alert("Vui lòng điền đầy đủ các mục đăng kí.")
  } else { 
      if(!this.state.isInputValid){
          alert("Đăng kí chưa hợp lệ. Hãy kiểm tra lại thông tin của bạn.")
      } else{
          //call API to create new user
          fetch('http://localhost:8080/MatchingMe/add-post',{
              mode: "cors",
              method: "POST",
              headers:{ 
                  "Access-Control-Allow-Origin": "*",
                  'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
                  "Allow-Credentials": true,
                  'Accept': 'application/json',
                  "Content-Type": "application/json"
              },
              body: JSON.stringify({  
                                      "type": this.state.type,
                                      "idUser" : this.state.idUser,
                                      "arae": this.state.arae,
                                      "address_detail": this.state.address_detail,
                                      "sessions": this.state.sessions,
                                      "idClass": this.state.idClass,
                                      "idSubject": this.state.idSubject,
                                      "phoneNumber": this.state.phoneNumber,
                                      "salary": this.state.salary,
                                      "title": this.state.title,
                                      "description": this.state.description
              })
          })
          // .then(Response => Response.json())
          // .then(data => {
          //     console.log("HEHE", data);
          //     alert("Đăng kí thành công. Vui lòng đăng nhập");
          // })
          .catch(function (err) {
            alert("Lỗi hệ thống");
            console.log(err);
          }); 
          this.setState({
            isRedirect: true
          })
          alert("Chúc mừng. Bạn đã đăng tin thành công.");
      }
      event.preventDefault();
  }
}
redirectToHome(){
  if(this.state.isRedirect){
      return(
          <Redirect 
          to={{
              pathname: "/"
          }}
          > </Redirect>
      )
  } else{
      return null
  }
}
    render(){
        return(
          <MDBContainer>
          <form onSubmit={this.onHandleSubmit} >
          <MDBRow >
              <MDBCol md="8" className="pl-100">
              {(this.state.isRedirect)
              ?<Redirect to={{pathname: "/"}}/> 
              :null}
                  {/* <p className="h5 text-center mb-4">Sign up</p> */}
                      <MDBCardHeader className="form-header warm-flame-gradient rounded">
                          <h3 className="text-center text-primary my-3">
                              <b>ĐĂNG TIN YÊU CẦU</b>
                          </h3>
                      </MDBCardHeader>
                      <p className="text-center">Điền vào mẫu sau để tạo mới một bài đăng</p>
                      <hr></hr>
                      <div className="grey-text">
                      {/* type */}
                      <div>
                        <span className="glyphicon glyphicon-book"></span>
                        <label>Bạn muốn tìm <b> Gia sư </b>
                                hay <b> Học sinh</b> ?</label>
                        <div>
                            <div>
                                <input 
                                    type='radio' 
                                    name='type' 
                                    value={"FindTutor"}
                                    checked={this.state.type==="FindTutor" ? true : false}
                                    onChange={this.onHandleChange}
                                />
                                <label>Gia sư</label>
                            </div>
                            <div className='pear-item'>
                                <input 
                                    type='radio' 
                                    name='type' 
                                    value={"FindHost"}
                                    checked={this.state.type ==="FindHost" ? true : false}
                                    onChange={this.onHandleChange}
                                />
                                <label className='pear-label'>Học sinh</label>
                            </div>
                        </div>                      
                      </div>
                      {/* Title */}
                      <MDBInput
                          label="Tiêu đề (Không quá 50 từ)" icon="pencil" group type="text" validate 
                          error="wrong" success="right" 
                          name="title"
                          onChange={this.onHandleChange}
                      />
                      {/* Class */}
                      <label> Học sinh khối lớp:
                        <select className="custom-select" size="3" name="idClass" onChange={this.onHandleChange}>
                          <option value={1}>Tiểu học</option>
                          <option value={2}>Trung học cơ sở</option>
                          <option value={3}>Trung học phổ thông</option>
                          <option value={4}>Khác</option>
                        </select>
                      </label>
                      {/* Subject */}
                      <label> Môn dạy:
                        <select className="custom-select" size="3" name="idSubject" onChange={this.onHandleChange}>
                          <option value="1">Toán</option>
                          <option value="4">Vật Lý</option>
                          <option value="5">Hóa học</option>
                          <option value="6">Ngữ Văn</option>
                          <option value="7">Tiếng Anh</option>
                          <option value="2">Lập trình</option>
                        </select>
                      </label>
                      {/* Salary */}
                      <MDBInput
                        label="Lương một buổi học" icon="money" group type="text"
                        validate error="wrong" success="right"
                        name="salary"
                        onChange={this.onHandleChange}
                      />
                      {/* sesions */}
                      <MDBInput
                        label="Số buổi học trong một tuần" icon="book" group type="text"
                        validate error="wrong" success="right"
                        name="sessions"
                        onChange={this.onHandleChange}
                      />
                      {/* area */}
                      <MDBInput
                        label="Khu vực dạy (Tỉnh/Thành Phố)" icon="map" group type="text"
                        validate error="wrong" success="right"
                        name="area"
                        onChange={this.onHandleChange}
                      />
                      {/* address_detail */}
                      <MDBInput
                        label="Địa chỉ cụ thể (Số nhà/ đường)" icon="search" group type="text"
                        validate error="wrong" success="right"
                        name="address_detail"
                        onChange={this.onHandleChange}
                      />
                      {/* Phone Number */}
                      <MDBInput
                          label="Số điện thoại của Gia sư hoặc phụ huynh" icon="phone-square" group type="tel"
                          validate error="wrong" success="right"
                          name="phone"
                          onChange={this.onHandleChange}
                          onBlur={this.handlePhoneValidation}
                      />
                      {/* description */}
                      <MDBInput
                        label="Những yêu cầu khác" icon="cloud" group type="text"
                        validate error="wrong" success="right"
                        name="description"
                        onChange={this.onHandleChange}
                      />

                      </div>
                      {/* Button Submit */}
                      <div className="text-center mt-4">
                          <MDBBtn color="deep-orange" className="mb-3" type="submit" value="Submit">
                              Gửi bài
                          </MDBBtn>
                      </div>
              </MDBCol>
          </MDBRow>
          </form>
      </MDBContainer>
        )
    }
} 
