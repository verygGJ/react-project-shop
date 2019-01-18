import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { NewsSingle } from './news-single';
import { News } from './news';

const Blog = ({match}) => (
  <div>
    <Switch>
      <Route path="/blog" exact component={News} />
      <Route path="/blog/:id" component={NewsSingle} />
    </Switch>
  </div>
)
export default Blog;
