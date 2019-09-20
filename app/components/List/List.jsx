import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Header from '../Header/index.js';
import { getList } from './store/actions'
import list_css from './List.css';

class VList extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillMount(){
    if(this.props.staticContext){
      console.log("::list_css::>>", list_css);
      console.log("::props::>>", this.props);
      this.props.staticContext.css.push(list_css._getCss());
      console.log("::after_props::>>", this.props)
    }
    
  }



  componentDidMount(){
    if(this.props.list.lenght === 0){
      this.props.getList(store)
    }
  }
  render(){
    return (
    <div>
      <Header staticContext={this.props.staticContext}></Header>
      <span className={list_css.title}>文章列表页面</span>
      {this.props.list.map((value, index)=>{
        return <div className={list_css.atom} key={value}>{value}</div>
      })}
    </div>)
  }
}


const mapStateToProps = (state)=>{
  return({
    list: state.list.newsList
  })
}

const mapDispatchToProps = (dispatch)=>{
  return({
    getList: getList(dispatch)
  })
}

const List = connect(mapStateToProps, mapDispatchToProps)(VList)


List.loader = async(store)=>{
  await getList(store.dispatch);
}

export default List;