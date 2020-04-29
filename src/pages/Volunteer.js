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
            volunteer.map((role, id) => {
                const { organization, position, website, startDate, endDate, summary, highlights } = role;
                return (
                    <ul key={id}>
                        <li>Organization: {organization}</li>
                        <li>Position: {position}</li>
                        <li>Website: {website}</li>
                        <li>Start Date: {startDate}</li>
                        <li>End Date: {endDate}</li>
                        <li>Summary: {summary}</li>
                        <li>Highlights:</li>
                        <ul>
                            {highlights.map((highlight, id) => {
                                return (
                                    <li key={id}>{highlight}</li>
                                )
                            })}
                        </ul>
                    </ul>
                )
            })
        )
    }
}


export default Volunteer;