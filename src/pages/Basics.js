import React, { Component } from 'react';

class Basics extends Component {
    constructor() {
      super()
      this.state = {
        basics: {
          name: "John Doe",
          label: "Programmer",
          picture: "",
          email: "john@gmail.com",
          phone: "(912) 555-4321",
          website: "http://johndoe.com",
          summary: "A summary of John Doe...",
          location: {
            address: "2712 Broadway St",
            postalCode: "CA 94115",
            city: "San Francisco",
            countryCode: "US",
            region: "California"
          }
        }
      }
    }
    
  render() {
    const { basics } = this.state;
    const { name, label, picture, email, phone, website, summary, location } = basics;
    const { address, postalCode, city, countryCode, region } = location;
    return (
      <ul>
          <li>Name: {name}</li>
          <li>Label: {label}</li>
          <li>Picture: {picture}</li>
          <li>Email: {email}</li>
          <li>phone: {phone}</li>
          <li>Website: {website}</li>
          <li>Summary: {summary}</li>
          <li>Location:</li>
          <ul>
            <li>Address: {address}</li>
            <li>Postal Code: {postalCode}</li>
            <li>City: {city}</li>
            <li>Country Code: {countryCode}</li>
            <li>Region:{region}</li>
          </ul>
      </ul>

    )
  }
}


export default Basics;