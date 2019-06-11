import React, { Fragment } from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import Pagination from "./../../ui/Paginations";
import Breadcrumbs from "./../../ui/Breadcrumbs";
import posts from '../../../../API/posts.json';

const sidebarLinks = [
  {
    "name": "Все",
    "category": "all",
  },
  {
    "name": "Новости",
    "category": "news",
  },
  {
    "name": "Статьи",
    "category": "post",
  },
  {
    "name": "Акции",
    "category": "sale",
  }
]

class NewsItem extends React.Component {
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
    allNews: [],
    fNews: [],
    currentNews: [],
    currentPage: 1,
    totalPages: null,
    pageLimit: 4,
    display: 'all',
  };

  componentDidMount() {
    const allNews = posts;
    this.setState({ 
      allNews, 
      fNews: posts 
    }, () => this.updatePages());
  }

  updatePages = () => {
    const { fNews, pageLimit, currentPage } = this.state;
    const offset = (currentPage - 1) * pageLimit;
    const newCurr = fNews.slice(offset, offset + pageLimit);
    const updateTotalPages = Math.ceil(fNews.length / pageLimit);
    this.setState({ 
      currentNews: newCurr, 
      totalPages: updateTotalPages 
    });
  }

  filteredPosts = () => {
    const { allNews, display } = this.state;
    const filterdNews = allNews.filter(item => display === 'all' ? item : item.category === display )
    this.setState({ 
      fNews: filterdNews, 
      currentPage: 1 
    }, () => this.updatePages());
  }

  showPosts = (filtered) => {
    this.setState({
      display: filtered,
    },() => this.filteredPosts());
  }

  onPageChanged = (data) => {
    const { fNews } = this.state;
    const { currentPage, pageLimit } = data;

    const offset = (currentPage - 1) * pageLimit;
    const currentNews = fNews.slice(offset, offset + pageLimit);

    this.setState({ currentPage, currentNews });
  };

  
  render() {
    const { currentNews, pageLimit, fNews, totalPages, currentPage, display } = this.state;
    const totalNews = fNews.length;
    if (totalNews === 0) return null;

    return (
      <div className="blog">
        <Fragment>
          <Breadcrumbs />
        </Fragment>
        <div className="blog__inner">

          <div className="blog__main">
            <div className="blog__list">
              {currentNews.map(item => ( <NewsItem key={item.id} item={item} />))}
            </div>
            <div className="pagination">
              <Pagination
                totalRecords={totalNews}
                pageLimit={pageLimit}
                totalPages={totalPages}
                currentPage={currentPage}
                pageNeighbours={1}
                onPageChanged={this.onPageChanged}
              />
            </div>
          </div>

          <div className="blog__sidebar">
            <ul className="blog__nav-list">
              {sidebarLinks.map((link, index) => (
                <li
                  key={index}
                  className={ display === link.category ? 'blog__nav-item active' : 'blog__nav-item' } 
                  onClick={() => this.showPosts(`${link.category}`)}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    );
  }
}
