import React, { Component } from 'react';

class Awards extends Component {
    constructor() {
        super()
        this.state = {
            awards: [{
                title: "Award",
                date: "2014-11-01",
                awarder: "Company",
                summary: "There is no spoon."
            }]
        }
    }
    render() {
        const { awards } = this.state;
        return (
            awards.map((award, id) => {
                const { title, date, awarder, summary } = award;
                return (
                    <ul key={id}>
                        <li>Title: {title}</li>
                        <li>Date: {date}</li>
                        <li>Awarder: {awarder}</li>
                        <li>Summary: {summary}</li>
                    </ul>
                )
            })
        )
    }
}


export default Awards;