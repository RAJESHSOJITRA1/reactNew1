/* eslint-disable no-undef */
// git remote add origin https://github.com/RAJESHSOJITRA1/news-app.git
// ad4a169546204d5dbb3b4787515cb547
// import './App.css'
// import PropTypes from 'prop-types';
// import { Component } from 'react';
import Navbar from './component/Navbar';
import { useState } from 'react';
import News from './component/News';
import LoadingBar from 'react-top-loading-bar'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App=()=> {
  // static propTypes = {
  //   prop: PropTypes
  // }
      const [progress,setProgress]=useState(0);
      const apikey="ad4a169546204d5dbb3b4787515cb547";
      // const apikey=process.env.REACT_APP_NEWS_URL;
      const pageSize = 5;
   
  // state = {
  //   progress: 0 
  // }
  // setProgress = (progress) => {
  //   this.setState({ progress: progress })
  // }

    return (
      <>
        <Router>
          <Navbar path="/" />
          <LoadingBar
            color='#f11946'
            height={3}
            progress={progress}
          />

          {/* <News setProgress={this.setProgress}
          apikey={this.apikey} pageSize={this.pageSize} country="in" category="business"/> */}
          <Routes>
            <Route path="/" element={<News setProgress={setProgress}
              apikey={apikey} pageSize={pageSize} key="general" country="in" category="general" />} />

            <Route exeact path="/business" element={<News setProgress={setProgress}
              apikey={apikey} pageSize={pageSize} key="business" country="in" category="business" />} />
            <Route exeact path="/entertainment" element={<News setProgress={setProgress}
              apikey={apikey} pageSize={pageSize} key="entertainment" country="us" category="entertainment" />} />
            <Route exeact path="/general" element={<News setProgress={setProgress}
              apikey={apikey} pageSize={pageSize} key="general" country="us" category="general" />} />
            <Route exeact path="/sports" element={<News setProgress={setProgress}
              apikey={apikey} pageSize={pageSize} key="sports" country="au" category="sports" />} />
            <Route exeact path="/health" element={<News setProgress={setProgress}
              apikey={apikey} pageSize={pageSize} key="health" country="nz" category="health" />} />
            <Route exeact path="/technology" element={<News setProgress={setProgress}
              apikey={apikey} pageSize={pageSize} key="technology" country="in" category="technology" />} />
            <Route exeact path="/science" element={<News setProgress={setProgress}
              apikey={apikey} pageSize={pageSize} key="science" country="us" category="science" />} />
          </Routes>
        </Router>
      </>
    )
}

export default App;
