import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';


const BreadcrumbsItem = (part, partIndex, parts) => {
  const path = ['', ...parts.slice(0, partIndex + 1)].join("/");
  return (
    <li className="breadcrumbs__item" key={path} >
      <Link to={path} >{part}</Link>
    </li>
  )
}

export class BreadcrumbsList extends React.Component {
  render() {
    let props = this.props;
    let parts = props.location.pathname.split("/");
    const place = parts[parts.length - 1];
    parts = parts.slice(1, parts.length - 1);

    return (
      <ul className="breadcrumbs__list">
          <ul className="breadcrumbs__list">
            <li className="breadcrumbs__item">
              <Link to={"/"} >Home</Link>
            </li>
            {parts.map(BreadcrumbsItem)}
            <li className="breadcrumbs__item current">
              <span>{place}</span>
            </li>
          </ul>
      </ul>
    )

  }
}

const Breadcrumbs = () => {
  return (
    <Route path="*" component={BreadcrumbsList} />
  )
}

export default Breadcrumbs;
