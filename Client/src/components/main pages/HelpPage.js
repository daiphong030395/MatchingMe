import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody,  MDBBtn, MDBCardHeader} from "mdbreact";


export default class Help extends React.Component {
    handleChange(event){
        this.setState({ [event.target.name]: event.target.value });
    }
    
    onSubmit = (event) => {
        console.log('onSubmitLogin');
        //API send Feedback
        
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
                  <h3 className="my-3 text-lg-center font-weight-bold"> TRỢ GIÚP VÀ PHẢN HỒI </h3>
                </MDBCardHeader>
                <form onSubmit={this.onSubmit}>
                  <label htmlFor="type" className="grey-text font-weight-light">
                    Chủ đề
                  </label>
                  <input type="text" name="type" id="type" className="form-control" onChange = {this.handleChange.bind(this)}/>
                  <label htmlFor="content" className="grey-text font-weight-light">
                    Nội dung
                  </label>
                  <input type="text" name="content" className="form-control h-200" onChange = {this.handleChange.bind(this)}/>
                  <div className="text-center mt-4">
                    <MDBBtn color="deep-orange" className="mb-3" type="submit">
                      Gửi phản hồi
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