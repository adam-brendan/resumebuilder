import React, { Component } from 'react';

class References extends Component {
    constructor() {
        super()
        this.state = {
            references: [{
                name: "Jane Doe",
                reference: "Reference..."
            }]
        }
    }
    render() {
        const { references } = this.state;
        return (
            references.map((ref) => {
                this.props.mapArray(ref);
            })
        )
    }
}


export default References;