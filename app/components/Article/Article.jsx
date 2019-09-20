import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../Header/index.js';
import article_css from './Article.css';

class Article extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (<div>
    <Header/>
    <p  className={article_css.title}><span>文章页面22223</span></p>
    </div>)}
}

export default Article;