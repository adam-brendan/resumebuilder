import React, { Component } from 'react';

class Work extends Component {
    constructor() {
        super()
        this.state = {
            formSubmitted: false;
            // work: [{
            //     company: "Company",
            //     position: "President",
            //     website: "http://company.com",
            //     startDate: "2013-01-01",
            //     endDate: "2014-01-01",
            //     summary: "Description...",
            //     highlights: [
            //       "Started the company"
            //     ]
            // }]
        }
    }
    render() {
        const { work } = this.state;
        return (
            work.map((job, id) => {
                const { company, position, website, startDate, endDate, summary, highlights } = job;
                return (
                    <ul key={id}>
                        <li>Company: {company}</li>
                        <li>Position: {position}</li>
                        <li>Website: {website}</li>
                        <li>Start Date: {startDate}</li>
                        <li>End Date: {endDate}</li>
                        <li>Summary: {summary}</li>
                        <li>Highlights:</li>
                        <ul>
                            {highlights.map((highlight) => {
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


export default Work;