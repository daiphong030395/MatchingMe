import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody,  MDBBtn, MDBCardHeader} from "mdbreact";

class MailForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      idUser : 0,
      type : "",
      content: ''
    }
  }

  handleChange(event){
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit = (event) => {
    console.log('onSubmitLogin');
    //API insert to mailbox
    event.preventDefault();
  }
  
    render(){
    return(
      <MDBContainer>
        <MDBRow>
          <MDBCol md="10">
            <MDBCard>
              <MDBCardBody>
                <MDBCardHeader className="form-header warm-flame-gradient rounded">
                  <h3 className="my-3">
                     Gửi mail cho User
                  </h3>
                </MDBCardHeader>

                <form onSubmit={this.onSubmit}>
                <label htmlFor="idUser" className="grey-text font-weight-light">
                  ID User nhận
                </label>
                <input type="text" name="idUser" id="idUser" className="form-control" onChange = {this.handleChange.bind(this)}/>
                <label htmlFor="type" className="grey-text font-weight-light">
                  Chủ đề
                </label>
                <input type="text" name="type" id="type" className="form-control" onChange = {this.handleChange.bind(this)}/>
                <label htmlFor="content" className="grey-text font-weight-light">
                  Nội dung
                </label>
                <input type="text" name="content" id="content" className="form-control" onChange = {this.handleChange.bind(this)}/>
                <div className="text-center mt-4">
                    <MDBBtn color="deep-orange" className="mb-3" type="submit">
                      Gửi
                    </MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      
    )
  }
}

export default MailForm;