import React, { Component } from 'react';

class Skills extends Component {
    constructor() {
        super()
        this.state = {
            skills: [{
                name: "Web Development",
                level: "Master",
                keywords: [
                  "HTML",
                  "CSS",
                  "Javascript"
                ]
            }]
        }
    }
    render() {
        const { skills } = this.state;
        return (
            skills.map((skill, id) => {
                const { name, level, keywords } = skill;
                return (
                    <ul key={id}>
                        <li>Name: {name}</li>
                        <li>Level: {level}</li>
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


export default Skills;