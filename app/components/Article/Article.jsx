import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../Header/index.js';
import article_css from './Article.css';

class Article extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillMount(){
    if(this.props.staticContext){
      this.props.staticContext.css.push(article_css._getCss());
    }
    
  }
  render(){
    return (<div>
    <Header staticContext={this.props.staticContext}/>
    <p  className={article_css.title}><span>文章页面22223</span></p>
    </div>)}
}

export default Article;