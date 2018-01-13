import React, {Component} from 'react';
import './Popup.css';
import cross from './cross.svg';

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

				</div>
			</div>
		);
	}
}

export default Popup;
