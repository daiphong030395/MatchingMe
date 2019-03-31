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
            idcard: '',
            address:'',
            town:'',
            district:'',
            province:''
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
            idProvince: this.state.user.idProvince,
            idcard: this.state.user.idCard
        });
        this.getAddress();
    }
    getAddress(){
        // fetch(' http://localhost:8080//MatchingMe/getprovince',{
        //   mode: "no-cors",
        //   method: "POST",
        //   headers:{ 
        //     "Access-Control-Allow-Origin": "*",
        //     // 'Accept': 'application/json',
        //     'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
        //     "Content-Type": "application/json"
        //   },
        //   body: JSON.stringify({"matp": this.state.user.idProvince})
        // })
        // .then(Response => Response.json())
        // .then(data => {
        //   console.log(data);
        //   this.setState({
        //       'address' : data.name
        //   })
        //   console.log(this.state.address);
        // })
        // .catch(function (err) {
        //   console.log(err);
        // }); 
        fetch(' http://localhost:8080//MatchingMe/getAddress',{
          mode: "cors",
          method: "POST",
          headers:{ 
            "Access-Control-Allow-Origin": "*",
            // 'Accept': 'application/json',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
            "Content-Type": "application/json"
          },
            body: JSON.stringify({  "idProvince": this.state.user.idProvince,
                                    "idDistrict": this.state.user.idDistrict,
                                    "idTown": this.state.user.idTown })
        })
        .then(Response => Response.json())
        .then(data => {
          console.log(data);
          this.setState({
              'address' : data.address,
              'town'    : data.nameTown,
              'district': data.nameDistrict,
              'province': data.nameProvince
          })
        //   console.log(this.state.address);
        })
        .catch(function (err) {
          console.log(err);
        }); 
    }

    //Display Right Name 
    // displayRight= () =>{
    //     if(this.state.user.idRight === 1){
    //         return <p>Admin</p>
    //     } else {
    //         if(this.state.user.idRight === 2){
    //             return <p>Gia sư</p>
    //         } else {
    //             return <p>Gia chủ</p>
    //         }
    //     }
    // }

    //HANDLE FORM INPUT
    handleChange = (evt) =>{
        console.log("HandleChange");
        this.setState({ [evt.target.name]: evt.target.value });
        console.log("name input change: ", evt.target.name);
        console.log("value input change: ", evt.target.value);
    }
    //HANDLE Radio Input
    onClick = nr => () =>{
        this.setState({
          radio: nr
        });
    }
    //BUTTON UPDATE 
    handleSubmit=(event)=>{
        // event.preventDefault();
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
            this.setState({
                user: user
            });
            // console.log("User after set:", this.state.user);
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
                console.log('http://localhost:8080/MatchingMe/user/'+ this.state.user.id)
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
        // const address = this.state.address;
        var bday = new Date();
        bday = this.state.user.birthday;
    return(
        <div>
            <table className="table">
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
                        <input type="password"  defaultValue={user.password}  name="password" id="pass" disabled />
                    </td>
				</tr>
                <tr>
					<th>Ngày sinh</th>
					<td>
                        {/* {this.state.user.birthday} */}
                        {bday}
                    </td>
				</tr>
				<tr>
					<th>Email</th>
					<td>
                        <input type="text"
                        defaultValue={user.email} name="email" id="email" 
                        onChange={this.handleChange}  
                        disabled={this.state.disableForm}/>
                    </td>
				</tr>
				<tr>
					<th>Số điện thoại</th>
					<td>
                        <input type="text"
                        defaultValue={user.phone} name="phone" id="phone" 
                        onChange={this.handleChange}  
                        disabled={this.state.disableForm}/>
                    </td>
				</tr>
				<tr>
					<th>Giới tính</th>
					<td >
                        {/* <input type="text"
						defaultValue={user.gender} name="gender" /> */}
                        <MDBFormInline className="radioGender">
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
                        </MDBFormInline>
                    </td>
				</tr>
                <tr>
					<th>Nơi ở (Phường/Xã, Quận/Huyện, Tỉnh/Thành Phố)</th>
					<td>
                        <input type="text"
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
                        />
                    </td>
				</tr>
                <tr>
					<th>Số CMTND</th>
					<td>
                        <input type="text"
                        defaultValue={user.idCard} name="idCard" id="idCard" 
                        onChange={this.handleChange}  
                        disabled={this.state.disableForm} />
                    </td>
				</tr>
                </tbody>
			</table>
            {/* <button onClick={this.handleClick} >Chỉnh sửa</button>  */}
            <Button type="submit" size="sm" color="primary" onClick={this.handleSubmit.bind(this)}>Chỉnh sửa</Button>
            </div>
        );
        
    }

    }


               