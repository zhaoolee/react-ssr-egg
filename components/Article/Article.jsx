import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../Header/index.js';

class Article extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
    <div>
      <Header></Header>
      <span>文章页面</span>
    </div>)
  }
}

export default Article;