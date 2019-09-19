import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../Header/index.js';

class List extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
    <div>
      <Header></Header>
      <span>文章列表页面</span>
    </div>)
  }
}

export default List;