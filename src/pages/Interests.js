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
            interests.map((interest) => {
                this.props.mapArray(interest);
            })
        )
    }
}


export default Interests;