import React from "react";

export default class ChooseCharCature extends React.Component {
	constructor() {
		super();
		this.state = {
			cats: ['./public/styles/images/cat1.png', './public/styles/images/cat2.png', './public/styles/images/cat3.png'],
			catChoice:''
		}

		this.catChoice = this.catChoice.bind(this);
	}

	catChoice(e) {
		this.setState({
			catChoice: e.target.value
		})
	}

	// addCatToUser() function to send cat to Firebase User table - grab userID from login
	addCatToUser() {
		const catChoice = this.state.catChoice
		console.log(catChoice)
	}


	render() {
		const cats = this.state.cats.map((imgSrc, i) => 
			<li key={i}>
				<input type="radio" name="catChoice" value={imgSrc} onChange={this.catChoice}/>
				<img src={imgSrc} alt=""/>
			</li>
		)

		return (
		<div>
			<div className="chooseCharacter">
				<ul>
					{cats}
				</ul>
				<button onClick={() => this.addCatToUser()}>Let's Play!</button>
			</div>
		</div>
		)
	}
}

