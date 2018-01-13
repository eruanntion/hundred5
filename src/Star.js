import React, {Component} from 'react';
import './Star.css';
import starActive from './star-active.svg';
import starDefault from './star-default.svg';

const Star = ({active, number}) => (
	<div className="Star">
		<img className="Star__image" src={active ? starActive : starDefault} alt="star"/>
		<span className="Star__text">{number}</span>
	</div>
);

export default Star;
