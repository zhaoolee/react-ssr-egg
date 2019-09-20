import React from 'react';
import { Route } from 'react-router-dom';
import List from './List/index.js';
import Article from './Article/index.js';


export default 
[{
    path: "/",
    exact: true,
    component: List,
    key: "list",
    loadData: List.loadData
  },{
    path: "/article",
    exact: true,
    component: Article,
    key: "article",
    loadData: Article.loadData,
}]