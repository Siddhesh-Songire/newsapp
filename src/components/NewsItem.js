import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let {title,description,imageURL, newsUrl, author, date} = this.props;  // destructing and props
    return (
      <div className = "my-2">
        <div className="card">
          <img src = {imageURL?imageURL:"https://media.istockphoto.com/photos/breaking-news-world-news-with-map-backgorund-picture-id1182477852?k=20&m=1182477852&s=612x612&w=0&h=I3wdSzT_5h1y9dHq_YpZ9AqdIKg8epthr8Guva8FkPA="} className="card-img-top" alt="..." style={{height:'225px'}}/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}...
            </p>
            <p className="caard-text"><small className="text-muted">By {author? author:"anonymous"} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href = {newsUrl} target = "_blank" className="btn btn-primary btn-sm">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
