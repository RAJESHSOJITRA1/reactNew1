/* eslint-disable no-unused-vars */
// RAJ648PATEL FOR API ad4a169546204d5dbb3b4787515cb547
//RAJESH2002 FOR API 3ca0ecda6680484c89855862717aab4d
//code with harry
//let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&from=2024-07-14&apiKey=ad4a169546204d5dbb3b4787515cb547&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;

import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
// import default from './../../eslint.config';
import PropTypes from "prop-types";

export class News extends Component {
  static defaultprops = {
    country: "in",
    pageSize: 10,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
      Capitalize=(str)=>{
    return str.charAt(0).toUpperCase() + str.slice(1);
    }
    
  constructor(props) {
    super(props);
    console.log("I am a constructor from news component ");
    this.state = {
      articles: [],
      loading: false,
      page:1,
      // key:[],
    };                                                              
    document.title=`${this.Capitalize(this.props.category)} News api`;
  }

  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ad4a169546204d5dbb3b4787515cb547&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    console.log(url);
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    console.log("component Did Mount");
    this.updateNews();
   
  }
  handleNextclick = async () => {
    console.log("next");
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };
  handlePrevclick = async () => {
    console.log("previous");

    this.updateNews();
    this.setState({ page: this.state.page - 1 });
  };

  render() {
    console.log("the page is rendered");

    return (
      <>
        <div className="container my-3">
          <h2>News Details - Top Headline on {this.Capitalize(this.props.category)}</h2>
          {this.state.loading && <Spinner />}
          <div className="row my-3">
            {this.state.articles.map((element, title) => {
              // console.log(element)
              return (
                <div className="col-md-4" key={element.url || title}>
                  <Newsitem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    urlToImage={element.urlToImage}
                    source={element.source.name}
                    url={element.url}
                    author={element.author}
                    date={element.publishedAt}
                  />
                </div>
              );
            })}

            {/* <div className="col-md-4">
        <Newsitem title="mytitle" description="mydesc"/>
        </div> */}
          </div>
        </div>
        <div className="container d-flex justify-content-between my-3">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark mx-3"
            onClick={this.handlePrevclick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-primary"
            onClick={this.handleNextclick}
          >
            Next &rarr;
          </button>
        </div>
      </>
    );
  }
}
export default News;

// async componentDidMount() {
//   console.log("component Did Mount");
  // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ad4a169546204d5dbb3b4787515cb547&page=1&pageSize=${this.props.pageSize}`;
  // this.setState({loading:true});
  // let data = await fetch(url);
  // let parsedData = await data.json();
  // console.log(parsedData);
  // this.setState({
  //   articles: parsedData.articles,
  //   totalResults: parsedData.totalResults,
  //   loading:false
  // })


// handleNextclick = async () => {
//   console.log("next");
//   if(!(this.state.page + 1 >= Math.ceil(this.state.totalResults / this.props.pageSize)) ) {
//     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ad4a169546204d5dbb3b4787515cb547&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;

//   this.setState({loading:true});
//   let data = await fetch(url);
//   let parsedData = await data.json();
//   console.log(parsedData);
//   this.setState({
//     page: this.state.page + 1,
//     articles: parsedData.articles,
//     loading:false
//   })
// }
// }

// handlePrevclick = async () => {
//   console.log("previous");
// if (this.state.page > 1){
//    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ad4a169546204d5dbb3b4787515cb547&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;

//   this.setState({loading:true});
//   let data = await fetch(url);
//   let parsedData = await data.json();
//   console.log(parsedData);
//   this.setState({
//     page: this.state.page - 1,
//     articles: parsedData.articles,
//     loading:false
//   })
// }
// }
