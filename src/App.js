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
import 'bootstrap/dist/css/bootstrap.min.css';

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

  mapArray = (obj, id) => {
    // return (
    //   <ul key={id}>
    //     {for (let [key, value] of Object.entries(obj)) {
    //         if (!Array.isArray(obj[key])) {
    //         return <li>{key.toUpperCase()}: {value}</li>
    //         } else {
    //           return (
    //             <>
    //               <li>{key.toUpperCase()}:</li>
    //               <ul>
    //                 {obj[keys].map((key, id) => {
    //                   return (
    //                     <li key={id}>{key}</li>
    //                   )
    //                 })}
    //               </ul>
    //             </>
    //           )
    //         }
    //       }}
    //   </ul>
    // )
  }


  render() {
    return (
      <>
        <Basics />
        <Work />
        {/* <Volunteer />
        <Education />
        <Awards />
        <Publications />
        <Skills />
        <Languages />
        <Interests />
        <References /> */}
      </>
    );
  }
}

export default App;
