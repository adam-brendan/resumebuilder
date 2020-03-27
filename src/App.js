import React, { Component } from 'react';
import './App.css';
import Basics from './pages/Basics';
import Work from './pages/Work';
import Volunteer from './pages/Volunteer';
import Education from './pages/Education';
import Awards from './pages/Awards';
import Publications from './pages/Publications';
import Skills from './pages/Skills';
import Languages from './pages/Languages';
import Interests from './pages/Interests';
import References from './pages/References';

class App extends Component {
  constructor() {
    super()
    this.state = {
      basics: {},
      work: [],
      volunteer: [],
      education: [],
      awards: [],
      publications: [],
      skills: [],
      languages: [],
      interests: [],
      references: []
    }
  }

  mapArray = (obj) => {
    for (let [key, value] of Object.entries(obj)) {
      if (!Array.isArray(obj[key])) {
      return <li>{key.toUpperCase()}: {value}</li>
      } else {
        return (
          <>
            <li>{key.toUpperCase()}:</li>
            <ul>
              {obj[keys].map((key, id) => {
                return (
                  <li key={id}>{key}</li>
                )
              })}
            </ul>
          </>
        )
      }
    }
  }


  render() {
    return (
      <>
        <Basics />
        <Work mapArray={this.mapArray}/>
        <Volunteer mapArray={this.mapArray}/>
        <Education mapArray={this.mapArray}/>
        <Awards mapArray={this.mapArray}/>
        <Publications mapArray={this.mapArray}/>
        <Skills mapArray={this.mapArray}/>
        <Languages mapArray={this.mapArray}/>
        <Interests mapArray={this.mapArray}/>
        <References mapArray={this.mapArray}/>
      </>
    );
  }
}

export default App;
