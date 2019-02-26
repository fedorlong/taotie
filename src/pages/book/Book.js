import React from 'react';
import { withRouter } from 'react-router';
import BookContainer from './smart/BookContainer';

// 函数组件
const Book = ({ history }) => (
  <BookContainer history={history} />
);

export default withRouter(Book);