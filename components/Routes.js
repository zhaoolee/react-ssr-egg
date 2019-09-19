import React from 'react';
import { Route } from 'react-router-dom';
import List from './List/index.js';
import Article from './Article/index.js';

export default (
	<div>
		<Route path='/' exact component={List}></Route>
		<Route path='/article' exact component={Article}></Route>
	</div>
)