import React from 'react';
import firebase from 'firebase';

// Initialize Firebase
const config = {
	apiKey: "AIzaSyAenVp3WE0bdibE49PaLe3Td5DrKOeTuiU",
	authDomain: "kittykatcher-ee178.firebaseapp.com",
	databaseURL: "https://kittykatcher-ee178.firebaseio.com",
	projectId: "kittykatcher-ee178",
	storageBucket: "",
	messagingSenderId: "1066420552135"
};
firebase.initializeApp(config);

const provider = new firebase.auth.GoogleAuthProvider();

export default class Login extends React.Component {
	constructor() {
		super();
		this.state = {
			loggedIn: false
		}
		this.login = this.login.bind(this);
	}

	componentDidMount() {
		firebase.auth().onAuthStateChanged((user) => {
			if(user) {
				this.setState({
					loggedIn: true
				})
			} else {
				this.setState({
					loggedIn: false
				})
			}
		})
	}

	login(e) {
		e.preventDefault();
		
		//login w/Google
		firebase.auth().signInWithPopup(provider)
			.then((user) => {
				this.setState({
					loggedIn: true
				})
			})
	}

	logout(e) {
		e.preventDefault();

		//logout of Google
		firebase.auth().signOut()
			.then(() => {
				this.setState({
					loggedIn: false
				})
			})
	}

	render() {
		
		return (
			<div>
				<a href="" onClick={this.login}>Login</a>
				<a href="" onClick={this.logout}>Logout</a>
			</div>
		)
	}
}