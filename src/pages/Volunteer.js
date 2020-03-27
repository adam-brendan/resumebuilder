import React, { Component } from 'react';

class Volunteer extends Component {
    constructor() {
        super()
        this.state = {
            volunteer: [{
                organization: "Organization",
                position: "Volunteer",
                website: "http://organization.com/",
                startDate: "2012-01-01",
                endDate: "2013-01-01",
                summary: "Description...",
                highlights: [
                  "Awarded 'Volunteer of the Month'"
                ]
            }]
        }
    }
    render() {
        const { volunteer } = this.state;
        return (
            volunteer.map((role) => {
                this.props.mapArray(role);
            })
        )
    }
}


export default Volunteer;