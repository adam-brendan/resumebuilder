import React, { Component } from 'react';

class Interests extends Component {
    constructor() {
        super()
        this.state = {
            interests: [{
                name: "Wildlife",
                keywords: [
                  "Ferrets",
                  "Unicorns"
                ]
            }]
        }
    }
    render() {
        const { interests } = this.state;
        return (
            interests.map((interest, id) => {
                const { name, keywords } = interest;
                return (
                    <ul key={id}>
                        <li>Name: {name}</li>
                        <li>Keywords:</li>
                        <ul>
                            {keywords.map((keyword, id) => {
                                return (
                                    <li key={id}>{keyword}</li>
                                )
                            })}
                        </ul>
                    </ul>
                )
            })
        )
    }
}


export default Interests;