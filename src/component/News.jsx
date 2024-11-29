/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// RAJ648PATEL FOR API ad4a169546204d5dbb3b4787515cb547
//RAJESH2002 FOR API 3ca0ecda6680484c89855862717aab4d
//code with harry
//let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&from=2024-07-14&apiKey=ad4a169546204d5dbb3b4787515cb547&page=${page - 1}&pageSize=${props.pageSize}`;

import React, { useEffect,useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
// import default from './../../eslint.config';
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News =(props)=> {
  
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

    const  Capitalize=(str)=>{
    return str.charAt(0).toUpperCase() + str.slice(1);
    }
    
  
  // document.title=`${Capitalize(props.category)} News api`;

  const  updateNews=async()=> {
    props.setProgress(0);       
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${process.env.REACT_APP_SECRET_KEY}&page=${this.state.page}&pageSize=${props.pageSize}`;
    console.log(url);
    setLoading(true)
    let data = await fetch(url);
    let parsedData = await data.json();
    props.setProgress(50);
    console.log(parsedData);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
   
    props.setProgress(100);

  }

  // componentdidmount
    useEffect(() => {
      updateNews()
      
    
      
    }, [])
    

  
  const handleNextclick = async () => {
    console.log("next");
    setPage(page + 1)
    updateNews();
  };
 const  handlePrevclick = async () => {
    console.log("previous");

    updateNews();
    setPage(page - 1)

  };
  
 const  fetchMoreData = async() => {   
     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}`;
  setPage(page + 1)
    console.log(url);
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
      setArticles(articles.concat(parsedData.articles))
      setTotalResults(parsedData.totalResults)

  };


    return (
      <>
        <div className="container my-3" >
          <h2 className="text-center" style={{margin:'35px 0px',marginTop:"90px"}}>
            News Details - Top Headline on{" "}
            {Capitalize(props.category)}
          {loading && <Spinner />} 
          </h2>
               <InfiniteScroll
                  dataLength={articles.length}
                  next={fetchMoreData}
                  hasMore={articles.length!==totalResults}
                  loader={ <Spinner />}
               >
          <div className="row my-3">
            {articles.map((element, title) => {
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
          </div>
            </InfiniteScroll>
        </div>
      </>
    );
  }
export default News;

News.defaultprops = {
  country: "in",
  pageSize: 10,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

// async componentDidMount() {
//   console.log("component Did Mount");
  // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=ad4a169546204d5dbb3b4787515cb547&page=1&pageSize=${props.pageSize}`;
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
//   if(!(this.state.page + 1 >= Math.ceil(this.state.totalResults / props.pageSize)) ) {
//     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=ad4a169546204d5dbb3b4787515cb547&page=${this.state.page + 1}&pageSize=${props.pageSize}`;

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
//    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=ad4a169546204d5dbb3b4787515cb547&page=${this.state.page - 1}&pageSize=${props.pageSize}`;

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
