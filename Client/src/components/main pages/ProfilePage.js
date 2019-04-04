import React from 'react'
import { Card, Col, Row, View, Mask, CardImage, CardBody, CardTitle, CardText, CardFooter, Button, Fa } from 'mdbreact';
import src1 from '../../image/baby.jpg';
// import {NavLink, Redirect} from 'react-router-dom';
// import Profile from '../Pages/Profile';

export default class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisplay: false
    }
  }
  onHandleClick= () =>{
    this.setState({
      isDisplay: !this.state.isDisplay
    })
  }
  render(){
  return (
    <React.Fragment>
        <Row className="justify-content-center">
        <Col sm="12" md="6" lg="3" className="mb-5">
            <Card>
                <CardImage className="img-fluid" src={src1} />
                <CardBody>
                    <CardTitle className="text-center mb-2 font-bold">Alice Mayer</CardTitle>
                    <CardTitle sub className="text-center indigo-text mb-2 font-bold">Photographer</CardTitle>
                    <CardText>
                        <strong className="mb-2">About:</strong>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione perferendis quod animi dignissimos consectetur quibusdam numquam laboriosam, minus, provident...
                    </CardText>
                    <div className="row justify-content-end pr-1">
                        <Button size="sm" onClick={this.onHandleClick} outline color="primary">More...</Button>
                    </div>
                </CardBody>
            </Card>
        </Col>
        <Col md="6" lg="9">
        <section className="text-center pb-3">
          <Row className="d-flex justify-content-center">
            <Col lg="6" xl="5" className="mb-3">
              <Card className="d-flex mb-5">
                <View>
                  <img src="https://mdbootstrap.com/img/Mockups/Horizontal/6-col/pro-profile-page.jpg" alt="Project" className="img-fluid"/>
                  <Mask overlay="white-slight"/>
                </View>
                <CardBody>
                  <CardTitle className="font-bold mb-3">
                    <strong>Project name</strong>
                  </CardTitle>
                  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                </CardBody>
                <CardFooter className="links-light profile-card-footer">
                  <span className="right">
                    <a className="p-2" href="#profile">
                      Live Preview
                      <Fa icon="photo" className="ml-1"/>
                    </a>
                  </span>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="6" xl="5" className="mb-3">
              <Card className="d-flex mb-5">
                <View>
                  <img src="https://mdbootstrap.com/img/Mockups/Horizontal/6-col/pro-signup.jpg" alt="Project" className="img-fluid"/>
                  <Mask overlay="white-slight"/>
                </View>
                <CardBody>
                  <CardTitle className="font-bold mb-3">
                    <strong>Project name</strong>
                  </CardTitle>
                  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                </CardBody>
                <CardFooter className="links-light profile-card-footer">
                  <span className="right">
                    <a className="p-2" href="#profile">
                      Live Preview
                      <Fa icon="photo" className="ml-1"/>
                    </a>
                  </span>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center">
            <Col lg="6" xl="5" className="mb-3">
              <Card className="d-flex mb-5">
                <View>
                  <img src="https://mdbootstrap.com/img/Mockups/Horizontal/6-col/pro-profile-page.jpg" alt="Project" className="img-fluid"/>
                  <Mask overlay="white-slight"/>
                </View>
                <CardBody>
                  <CardTitle className="font-bold mb-3">
                    <strong>Project name</strong>
                  </CardTitle>
                  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                </CardBody>
                <CardFooter className="links-light profile-card-footer">
                  <span className="right">
                    <a className="p-2" href="#profile">
                      Live Preview
                      <Fa icon="photo" className="ml-1"/>
                    </a>
                  </span>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="6" xl="5" className="mb-3">
              <Card className="d-flex mb-5">
                <view-wrapper>
                  <img src="https://mdbootstrap.com/img/Mockups/Horizontal/6-col/pro-signup.jpg" alt="Project" className="img-fluid"/>
                  <Mask overlay="white-slight"/>
                </view-wrapper>
                <CardBody>
                  <CardTitle className="font-bold mb-3">
                    <strong>Project name</strong>
                  </CardTitle>
                  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                </CardBody>
                <CardFooter className="links-light profile-card-footer">
                  <span className="right">
                    <a className="p-2" href="#profile">
                      Live Preview
                      <Fa icon="photo" className="ml-1"/>
                    </a>
                  </span>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </section>
      </Col>
    </Row>
    </React.Fragment>
  );
  }
}

