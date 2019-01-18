import React, { Fragment } from 'react';
import Breadcrumbs from "./../../ui/Breadcrumbs";

export class NewsSingle extends React.Component {
  render() {
    let props = this.props;
    let item = props.location.state;

    if (item === undefined) return <div>404</div>;

    return (
      <div className="news-single">
        <Fragment>
          <Breadcrumbs />
        </Fragment>
        <div className="news-single__title">
          {item.title}
        </div>
        <div className="news-single__image">
          <img src={item.image} width="1176" height="555"  alt=""/>
        </div>
        <div className="news-single__date">
          {item.data}
        </div>
        <div className="news-single__text">
          {item.fulltext}
        </div>
      </div>
    );
  }
}
