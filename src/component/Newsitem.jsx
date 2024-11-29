/* eslint-disable react/prop-types */
// 3ca0ecda6680484c89855862717aab4d
// import { Component } from "react";

const  Newsitem=(props)=>{
    let { title, description, urlToImage, url, author, date } = props;
    return (
      <>
        {/* style={{width: "18rem"}} */}
        <div className="card">
          <div style={{display:"flex",
                        justifyContent:"flex-end",
                        position:"absolute",
                        right:0 }}>
        <span className="badge  bg-danger "style={{left:'90%',zIndex:1}}>
                {/* {source} */}
              {author}
              </span>
              </div>
          <img
            src={
              // urlimage found?true:false
              urlToImage
              ? urlToImage
              : "https://www.mediaite.com/wp-content/uploads/2023/04/g.png"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}
             
              <span className="badge bg-success">success</span>
            </h5>
          
            <p className="card-text">{description}...</p>
            <h6 className="card-text text-muted ">
              BY {author ? author : "unkonow"} <br /> ON{" "}
              {new Date(date).toGMTString()}
            </h6>
            <a
              rel="noreferrer"
              href={url}
              target="_blank"
              className="btn btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </>
    );
  }

export default Newsitem;
