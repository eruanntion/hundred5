import React from 'react';
import './Star.css';
import starActive from './star-active.svg';
import starDefault from './star-default.svg';

/**
 * Star component
 * @param isActive
 * @param number
 * @param onMouseEnter
 * @param onMouseLeave
 * @param onClick
 * @returns {*}
 * @constructor
 */
const Star = ({isActive, number, onMouseEnter, onMouseLeave, onClick}) => (
	<div className="Star">
		<img className="Star__image"
				 src={isActive ? starActive : starDefault}
				 alt="star"
				 onMouseEnter={() => onMouseEnter(number)}
				 onMouseLeave={onMouseLeave}
				 onClick={() => onClick(number)}/>
		<span className="Star__text">{number}</span>
	</div>
);

export default Star;
