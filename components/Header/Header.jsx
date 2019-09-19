import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class Header extends React.Component{
  constructor(props){
    super(props);

  }
  render(){
    return (<div>
      <Link to="/">前往文章列表页</Link>
      <Link to="/article">前往文章详情页</Link>
    </div>)
  }
}

export default Header;