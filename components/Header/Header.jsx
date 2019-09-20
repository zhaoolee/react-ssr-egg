import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styles from './Header.css';

class Header extends React.Component{
  constructor(props){
    super(props);

  }

  render(){
    return (<div>
      <Link to="/">前往文章列表页</Link>
      <Link to="/article">前往文章详情页</Link>
      <span className={styles.header_title}>title</span>
    </div>)
  }
}

export default Header