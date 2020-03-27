import React, { Component } from 'react';

class Education extends Component {
    constructor() {
        super()
        this.state = {
            education: [{
                institution: "University",
                area: "Software Development",
                studyType: "Bachelor",
                startDate: "2011-01-01",
                endDate: "2013-01-01",
                gpa: "4.0",
                courses: [
                  "DB1101 - Basic SQL"
                ]
            }]
        }
    }
    render() {
        const { education } = this.state;
        return (
            education.map((school, id) => {
                const { institution, area, studyType, startDate, endDate, gpa, courses } = school;
                return (
                    <ul key={id}>
                        <li>Institution: {institution}</li>
                        <li>Area: {area}</li>
                        <li>Study Type: {studyType}</li>
                        <li>Start Date: {startDate}</li>
                        <li>End Date: {endDate}</li>
                        <li>GPA: {gpa}</li>
                        <li>Courses:</li>
                        <ul>
                            {courses.map((course, id) => {
                                return (
                                    <li key={id}>{course}</li>
                                )
                            })}
                        </ul>
                    </ul>
                )
            })
        )
    }
}


export default Education;