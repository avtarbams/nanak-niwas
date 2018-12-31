import * as React from 'react';
import { Button, Col, ControlLabel, Form, FormControl, FormGroup, Row } from 'react-bootstrap';
import './contactus.css'



export interface NavigationProps {
  dummy?: any;
}

class Contact extends React.Component<NavigationProps, any>{

  constructor(props: NavigationProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      name: '',
      phone: '',
      comment: '',
      email: ''
    }
  }



  // public handleChange(value: any) {
  //   // tslint:disable-next-line:no-console
  //   console.log(value)
  //   if (typeof value.target.value !== 'number') {
  //     this.setState({ phone: '' })
  //   } else {
  //     this.setState({ phone: value.target.value })
  //   }
  // }

  public handleChange(e: any) {
    this.setState({ phone: e.target.value });
  }


  public getValidationState() {
    const { phone } = this.state;
    const phoneRegex = new RegExp("[^0-9]");

    if (!phoneRegex.test(phone)) {
      return 'success';
    }
    else if (phoneRegex.test(phone)) {
      return 'error';
    }
    return null;
  }

  public render() {

    const { name, comment, email } = this.state;

    return (
      <div className="contact-us-container">
        <Row>
          <Col md={6} sm={6} xs={12}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.1633615794767!2d-74.06963017603164!3d40.736430762605735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2572f3e459937%3A0xfd50ef7973038378!2sNanak+Naam+Jahaj+Gurudwara!5e0!3m2!1sen!2sus!4v1545518510054"
              style={{ width: '100%', height: '250px' }} />
          </Col>
          <Col md={6} sm={6} xs={12}>
            <Form horizontal={true}>
              <FormGroup controlId="formHorizontalName">
                <Col componentClass={ControlLabel} sm={2}>
                  Name
                  </Col>
                <Col sm={10}>
                  <FormControl type="text" placeholder="Enter your name" value={name} />
                </Col>
              </FormGroup>
              <FormGroup controlId="formHorizontalName" validationState={this.getValidationState()} >
                <Col componentClass={ControlLabel} sm={2}>
                  Phone
                 </Col>
                <Col sm={10}>
                  {/* <FormControl type="text" placeholder="Enter your phone number" value={phone} onChange={this.handleChange} /> */}
                  <FormControl type="text" onChange={this.handleChange} />
                  <FormControl.Feedback />
                </Col>
              </FormGroup>
              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                  Email
                  </Col>
                <Col sm={10}>
                  <FormControl type="email" placeholder="Email" value={email} />
                </Col>
              </FormGroup>
              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                  Comment
                  </Col>
                <Col sm={10}>
                  <FormControl type="text" placeholder="Comments" value={comment} />
                </Col>
              </FormGroup>
              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Button type="submit">Send Request</Button>
                </Col>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Contact;