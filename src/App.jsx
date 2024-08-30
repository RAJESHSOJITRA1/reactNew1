/* eslint-disable no-undef */
// git remote add origin https://github.com/RAJESHSOJITRA1/news-app.git
// ad4a169546204d5dbb3b4787515cb547
// import './App.css'
import Navbar from './component/Navbar';
import { Component } from 'react';
// import PropTypes from 'prop-types';
import News from './component/News';
import LoadingBar from 'react-top-loading-bar'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
export default class App extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }

  /* exeact path and key is used for page update  */
  pageSize = 5;
   apikey="ad4a169546204d5dbb3b4787515cb547";
  //  apikey="ad4a169546204d5dbb3b4787515cb547";
   
  state = {
    progress: 0 
  }
  setProgress = (progress) => {
    this.setState({ progress: progress })
  }
  render() {

    return (
      <>
        <Router>
          <Navbar path="/" />
          <LoadingBar
            color='#f11946'
            height={3}
            progress={this.state.progress}
          />

          {/* <News setProgress={this.setProgress}
          apikey={this.apikey} pageSize={this.pageSize} country="in" category="business"/> */}
          <Routes>
            <Route path="/" element={<News setProgress={this.setProgress}
              apikey={this.apikey} pageSize={this.pageSize} key="general" country="in" category="general" />} />

            <Route exeact path="/business" element={<News setProgress={this.setProgress}
              apikey={this.apikey} pageSize={this.pageSize} key="business" country="in" category="business" />} />
            <Route exeact path="/entertainment" element={<News setProgress={this.setProgress}
              apikey={this.apikey} pageSize={this.pageSize} key="entertainment" country="us" category="entertainment" />} />
            <Route exeact path="/general" element={<News setProgress={this.setProgress}
              apikey={this.apikey} pageSize={this.pageSize} key="general" country="us" category="general" />} />
            <Route exeact path="/sports" element={<News setProgress={this.setProgress}
              apikey={this.apikey} pageSize={this.pageSize} key="sports" country="au" category="sports" />} />
            <Route exeact path="/health" element={<News setProgress={this.setProgress}
              apikey={this.apikey} pageSize={this.pageSize} key="health" country="nz" category="health" />} />
            <Route exeact path="/technology" element={<News setProgress={this.setProgress}
              apikey={this.apikey} pageSize={this.pageSize} key="technology" country="in" category="technology" />} />
            <Route exeact path="/science" element={<News setProgress={this.setProgress}
              apikey={this.apikey} pageSize={this.pageSize} key="science" country="us" category="science" />} />
          </Routes>
        </Router>
      </>
    )
  }
}

