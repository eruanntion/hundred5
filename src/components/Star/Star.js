import React from 'react';
import './Star.css';
import starActive from './star-active.svg';
import starDefault from './star-default.svg';

const Star = ({isActive, number, onMouseEnter, onMouseLeave}) => (
	<div className="Star">
		<img className="Star__image"
				 src={isActive ? starActive : starDefault}
				 alt="star"
				 onMouseEnter={() => onMouseEnter(number)}
				 onMouseLeave={onMouseLeave}/>
		<span className="Star__text">{number}</span>
	</div>
);

export default Star;
