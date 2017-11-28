import React from 'react';

export default class Instructions extends React.Component {
	constructor() {
		super();
		this.state = {
			howToPlay: 'This is how to play',
			whatToCatch: 'This is how to catch',
		}
	}
	dismiss() {
		this.props.removeInstructions();
	}
	render() {
		return (
			<div className="instructions">
				<ul>
					<li>{this.state.howToPlay}</li>
					<li>{this.state.whatToCatch}</li>
					<button onClick={this.props.clickHandler}>Lets Play!</button>
				</ul>
			</div>
		)
	}
}