// git remote add origin https://github.com/RAJESHSOJITRA1/news-app.git
// import './App.css'
import Navbar from './component/Navbar';
import  { Component } from 'react';
// import PropTypes from 'prop-types';
import News from './component/News';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
export default class App extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }
//   businessentertainmentgeneralhealthsciencesportstechnology

              /* exeact path and key is used for page update  */
              pageSize=15;
  render() {
    return (
        <>
          <Router>
          <Navbar path="/" /> 
          {/* <News pageSize={this.pageSize} country="in" category="business"/> */}
            <Routes>
          <Route path="/" element= {<News pageSize={this.pageSize} key="general" country="in" category="general"/>}/>

      <Route exeact path="/business" element= {<News pageSize={this.pageSize}  key="business" country="in" category="business"/>}/>
      <Route exeact path="/entertainment"  element= {<News pageSize={this.pageSize} key="entertainment"  country="us" category="entertainment"/>}/>
      <Route exeact path="/general"  element= {<News pageSize={this.pageSize}  key="general" country="us" category="general"/>}/>
      <Route exeact path="/sports" element= {<News pageSize={this.pageSize} key="sports"  country="au" category="sports"/>}/>
      <Route exeact path="/health"  element= {<News pageSize={this.pageSize}  key="health" country="nz" category="health"/>}/>
      <Route exeact path="/technology"  element= {<News pageSize={this.pageSize} key="technology"  country="in" category="technology"/>}/>
      <Route exeact path="/science"  element= {<News pageSize={this.pageSize} key="science"  country="us" category="science"/>}/>
            </Routes>
          </Router>
        </>
    )
  }
}

