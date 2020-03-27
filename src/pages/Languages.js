import React, { Component } from 'react';

class Languages extends Component {
    constructor() {
        super()
        this.state = {
            languages: [{
                language: "English",
                fluency: "Native speaker"
            }]
        }
    }
    render() {
        const { languages } = this.state;
        return (
            languages.map((lang, id) => {
                const { language, fluency } = lang;
                return (
                    <ul key={id}>
                        <li>Language: {language}</li>
                        <li>Fluency: {fluency}</li>
                    </ul>
                )
            })
        )
    }
}


export default Languages;