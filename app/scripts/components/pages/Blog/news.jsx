import React, { Component, Fragment } from "react";
import { Link, Route } from 'react-router-dom';
import PropTypes from "prop-types";

import Pagination from "./../../ui/Paginations";
import Breadcrumbs from "./../../ui/Breadcrumbs";

import posts from '../../../../API/posts.json';



export class NewsItem extends React.Component {
  render() {
    const {
      image = null,
      data = null,
      id = null,
      title = null,
      text = null,
      fulltext = null,
      state = null
    } = this.props.item || {};

    return (
      <div className="news-block__item" >
        <div className="news-block__image">
          <Link to={{pathname: `blog/${id}`, state: this.props.item}}>
            <img src={`${image}`} width="476" height="300" alt="" />
          </Link>
          <div className="news-block__date">{data}</div>
        </div>
        <div className="news-block__title">
          <Link to={{pathname: `blog/${id}`, state: this.props.item}}>
            {title}
          </Link>
        </div>
        <div className="news-block__text">{text}</div>
      </div>
    );
  }
}

NewsItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    data: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired
};

export class News extends React.Component {
  state = {
    allCountries: [],
    currentCountries: [],
    currentPage: null,
    totalPages: null
  };

  componentDidMount() {
    const allCountries = posts;
    this.setState({ allCountries });
  }

  onPageChanged = data => {
    const { allCountries } = this.state;
    const { currentPage, totalPages, pageLimit } = data;

    const offset = (currentPage - 1) * pageLimit;
    const currentCountries = allCountries.slice(offset, offset + pageLimit);

    this.setState({ currentPage, currentCountries, totalPages });
  };

  render() {
    const {
      allCountries,
      currentCountries,
      currentPage,
      totalPages
    } = this.state;
    const totalCountries = allCountries.length;

    if (totalCountries === 0) return null;

    return (
      <div className="blog">
        <Fragment>
          <Breadcrumbs />
        </Fragment>
        <div className="blog__inner">
          <div className="blog__main">
            <div className="blog__list">
              {currentCountries.map((item, id) => (
                <NewsItem key={item.id}  item={item} />
              ))}
            </div>
          </div>
          <div className="pagination">
            <Pagination
                totalRecords={totalCountries}
                pageLimit={4}
                pageNeighbours={1}
                onPageChanged={this.onPageChanged}
              />
          </div>
        </div>
      </div>
    );
  }
}
