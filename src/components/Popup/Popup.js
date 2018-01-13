import React, {Component} from 'react';
import Star from '../Star';
import './Popup.css';
import cross from './cross.svg';
import _times from 'lodash/times';

class Popup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			suggestedRating: null
		}
	}

	onMouseEnter = (starNumber) => {
		this.setState({suggestedRating: starNumber});
	};

	onMouseLeave = () => {
		this.setState({suggestedRating: this.props.rating});
	};

	render() {
		const {onMouseEnter, onMouseLeave} = this;
		const {suggestedRating} = this.state;

		return (
			<div className="Popup">
				<div className="Popup__header">
					<div className="Popup__header-text">How likely are you to recommend <strong>Hundred5</strong> to a friend or
						colleague?
					</div>
					<img className="Popup__close" src={cross} alt="close"/>
				</div>
				<div className="Popup__body">
					{
						_times(11, (n) => (
							<Star number={n}
										key={n}
										isActive={suggestedRating != null && n <= suggestedRating}
										onMouseEnter={onMouseEnter}
										onMouseLeave={onMouseLeave}/>
						))
					}
				</div>
			</div>
		);
	}
}

export default Popup;
