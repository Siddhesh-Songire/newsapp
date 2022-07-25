import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  render() {
    return (
      <div className="container my-4">
        <h2>NewsMonkey - Top headlines</h2>
        <div className="row">
          <div className="col-md-4">
            <NewsItem
              title="My title"
              description="this is description using props"
            />
          </div>
          <div className="col-md-4">
            <NewsItem
              title="My title"
              description="this is description using props"
            />
          </div>
          <div className="col-md-4">
            <NewsItem
              title="My title"
              description="this is description using props"
            />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-4">
            <NewsItem
              title="My title"
              description="this is description using props"
            />
          </div>
          <div className="col-md-4">
            <NewsItem
              title="My title"
              description="this is description using props"
            />
          </div>
          <div className="col-md-4">
            <NewsItem
              title="My title"
              description="this is description using props"
            />
          </div>
        </div>
      </div>
    );
  }
}
