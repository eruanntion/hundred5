import React, {Component} from 'react';
import Star from './Star';
import './Popup.css';
import cross from './cross.svg';
import _times from 'lodash/times';

class Popup extends Component {
	render() {
		return (
			<div className="Popup">
				<div className="Popup__header">
					<div className="Popup__header-text">How likely are you to recommend <strong>Hundred5</strong> to a friend or
						colleague?
					</div>
					<img className="Popup__close" src={cross}/>
				</div>
				<div className="Popup__body">
					{
						_times(11, (n) => (
							<Star number={n} active={false}/>
						))
					}
				</div>
			</div>
		);
	}
}

export default Popup;
