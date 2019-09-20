import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../Header/index.js';
import article_css from './Article.css';

class Article extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
    <div>
      <Header></Header>
      <span className={article_css.title}>文章页面</span>
    </div>)
  }
}

export default Article;