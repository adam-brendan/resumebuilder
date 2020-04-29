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
            references.map((ref, id) => {
                const { name, reference } = ref;
                return (
                    <ul key={id}>
                        <li>Name: {name}</li>
                        <li>Reference: {reference}</li>
                    </ul>
                )
            })
        )
    }
}


export default References;