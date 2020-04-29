import React, { Component } from 'react';
import { Form, Button, Col } from 'react-bootstrap';

class Basics extends Component {
    constructor() {
      super()
      this.state = {
        formSubmitted: false,
      }
    }
    formSubmit = (event) => {
      event.preventDefault();
      this.setState({formSubmitted: true})
      let data = event.target;
      this.setState(
        {
          basics: {
            name: data.name.value,
            label: data.label.value,
            email: data.email.value,
            phone: data.phone.value,
            website: data.website.value,
            summary: data.summary.value,
            location: {
              address: data.address.value,
              postalCode: data.postalCode.value,
              city: data.city.value,
              countryCode: data.countryCode.value,
              region: data.region.value
            }
          }
        }
      )
    }

    displayInfo = () => {
      const { basics } = this.state;
      const { name, label, email, phone, website, summary, location } = basics;
      const { address, postalCode, city, countryCode, region } = location;
      return (
        <ul>
            <li>Name: {name}</li>
            <li>Label: {label}</li>
            <li>Email: {email}</li>
            <li>Phone: {phone}</li>
            <li>Website: {website}</li>
            <li>Summary: {summary}</li>
            <li>Location:</li>
            <ul>
              <li>Address: {address}</li>
              <li>Postal Code: {postalCode}</li>
              <li>City: {city}</li>
              <li>Country Code: {countryCode}</li>
              <li>Region: {region}</li>
            </ul>
        </ul>
      )

    }
   
    
  render() {
    if (!this.state.formSubmitted) {
      return (
        <Form onSubmit={this.formSubmit}>
          <Form.Row>
            <Form.Group as={Col} controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control name="name" type="text" placeholder="e.g. John Smith" />
            </Form.Group>
            <Form.Group as={Col} controlId="formLabel">
              <Form.Label>Label</Form.Label>
              <Form.Control name="label" type="text" placeholder="e.g. UI/UX Designer" />
            </Form.Group>
          </Form.Row>
          <Form.Label>Address</Form.Label>
          <Form.Row>
            <Form.Group as={Col} controlId="formStreetAddress">
              <Form.Label>Street Address</Form.Label>
              <Form.Control name="address" type="text" placeholder="e.g. 123 Road Street" />
            </Form.Group>
            <Form.Group as={Col} controlId="formPostalCode">
              <Form.Label>Postal Code</Form.Label>
              <Form.Control name="postalCode" type="text" placeholder="e.g. L1A 4C6" />
            </Form.Group>
            <Form.Group as={Col} controlId="formCity">
              <Form.Label>City</Form.Label>
              <Form.Control name="city" type="text" placeholder="e.g. Toronto" />
            </Form.Group>
            <Form.Group as={Col} controlId="formCountryCode">
              <Form.Label>Country Code</Form.Label>
              <Form.Control name="countryCode" type="text" placeholder="e.g. CA" />
            </Form.Group>
            <Form.Group as={Col} controlId="formRegion">
              <Form.Label>Region</Form.Label>
              <Form.Control name="region" type="text" placeholder="e.g. Ontario" />
            </Form.Group>
          </Form.Row>
          <Form.Label>Contact Information</Form.Label>
          <Form.Row>
            <Form.Group as={Col} controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control name="email" type="text" placeholder="e.g. johnsmith@yourdomain.com" />
            </Form.Group>
            <Form.Group as={Col} controlId="formPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control name="phone" type="tel" placeholder="e.g. 123-456-7890" />
            </Form.Group>
            <Form.Group as={Col} controlId="formWebsite">
              <Form.Label>Website</Form.Label>
              <Form.Control name="website" type="text" placeholder="e.g. www.johnsmith.net" />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formSummary">
              <Form.Label>Summary</Form.Label>
              <Form.Control name="summary" as="textarea" placeholder="Write about yourself!"/>
            </Form.Group>
          </Form.Row>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      )
    } else {
      return this.displayInfo()
    }
  }
}


export default Basics;