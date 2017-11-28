import React from 'react';
import ReactCountDownClock from 'react-countdown-clock';
import Instructions from './instructions';
import CSSTransitionGroup from 'react-transition-group';
import Animated from 'animated';

export default class KittyKatcher extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			instructions: true,
		}
		// binders here
		this.removeInstructions = this.removeInstructions.bind(this)
	}

	removeInstructions() {
		this.setState({
			instructions:false
		})
	}

	render() {
		return(
			<div>
				{this.state.instructions ? <Instructions clickHandler={this.removeInstructions} /> : <ReactCountDownClock seconds={60} /> }
			
				<Game />

			</div>

			
		)
	}
}

class Game extends React.Component {
	constructor() {
		super();
		this.state = {
			bg:'./public/styles/images/background.jpg',
			mousePosition: 0,
			top:0,
			coinPosition: this.rand(0, 800),
			poopPosition: this.rand(0, 800),
			fishPosition: this.rand(0, 800),
			score:0,
		}
		this.logMouse = this.logMouse.bind(this);
		this.fall = this.fall(this)
	}


	//ticker


	componentDidMount() {
		
	}

	// rand num generator
	rand(min, max) {
		return Math.random() * (max - min) + min;
	}

	

	//logMouse position to prop to Cat to style left val as screenX val
	logMouse(e) {
		window.addEventListener("mousemove", e.screenX)
		this.setState({
			mousePosition: e.screenX
		})	
	}
	
	fall() {
		
		//get random number every 2 seconds
		setInterval(() => {
			this.setState({
				coinPosition: this.rand(0,800),
				poopPosition: this.rand(0,800),
				fishPosition: this.rand(0,800)
			})
		}, 5000)
	}
	
	render() {

		// Score
		//if coin position is top is great than 50 and left position is within range of 20px of this.state.mousePosition then +1 point

		let coinPoint = this.state.score + 1
		
		if (coinPoint > 10 && coinPoint < 199) {
			console.log('ding')
		}
		// console.log(coinPoint)
		// console.log(this.state.mousePosition)
		// console.log(this.state.coinPosition)

		return (
			<div className="mouse" onMouseMove={this.logMouse}>
			<div className="infos">{this.state.score}</div>
				<div id="canvas" className="kittyKatcher">
					<Cat screenX={this.state.mousePosition}/>
					<Coin ref="coin" left={this.state.coinPosition}/>
					<Fish left={this.state.fishPosition}/>
					<Poop left={this.state.poopPosition}/>
				</div>
			</div>
		)
	}
}



class Cat extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			// pull cat from uniqueID/user/character
			cat:'./public/styles/images/cat1.png',
			styles: {
				left: 0,
			}
		}
	}

	render() {
		let catMovement = {
			left: this.props.screenX - 50
		}
		return (
				<div className="character" ref="character" style={catMovement}>
					<img src={this.state.cat} alt="" width="80px"/>
				</div>
		)
	}
}

class Coin extends React.Component {
	constructor() {
		super();
		this.state={
			image:'./public/styles/images/coin.png',
			addPoint: 1,
		}
	}
	render() {
		let coinFall = {
			left: this.props.left
		}
		return (
			<div className="coin fall" style={coinFall}>
				<img src={this.state.image} alt=""/>
			</div>
		)
	}
}

class Fish extends React.Component {
	constructor() {
		super();
		this.state={
			image:'./public/styles/images/fish.png',
			addTime: 5,
			addPoint: 2,
		}
	}

	componentDidMount() {
		// log where the div position is
		let top = this.refs.fish.offsetTop
		
	}

	render() {
		let fishFall = {
			left: this.props.left
		}
		
		return (
			<div className="fish fall" ref="fish" style={fishFall}>
				<img src={this.state.image} alt=""/>
			</div>
		)
	}
}

class Poop extends React.Component {
	constructor() {
		super();
		this.state={
			image:'./public/styles/images/poop.png',
			minusTime: 1,
			minusPoint: 1
		}
	}
	render() {
		let poopFall = {
			left: this.props.left
		}
		return (
			<div className="poop fall" style={poopFall}>
				<img src={this.state.image} alt=""/>
			</div>
		)
	}
}
