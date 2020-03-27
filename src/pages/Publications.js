import React, { Component } from 'react';

class Publications extends Component {
    constructor() {
        super()
        this.state = {
            publications: [{
                name: "Publication",
                publisher: "Company",
                releaseDate: "2014-10-01",
                website: "http://publication.com",
                summary: "Description..."
            }]
        }
    }
    render() {
        const { publications } = this.state;
        return (
            publications.map((publication, id) => {
                const { name, publisher, releaseDate, website, summary } = publication;
                return (
                    <ul key={id}>
                        <li>Name: {name}</li>
                        <li>Publisher: {publisher}</li>
                        <li>Release Date: {releaseDate}</li>
                        <li>Website: {website}</li>
                        <li>Summary: {summary}</li>
                    </ul>
                )
            })
        )
    }
}


export default Publications;