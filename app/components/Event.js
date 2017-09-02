import { Component } from 'react'

export class Event extends Component {
	render() {
		return (
				<div className = 'card'>
					<div className = 'card-header'>
						<h4>Event Name</h4>
						<small>No of Registrations: 10</small>
					</div>
					<div className = 'card-body'>
						<p>Venue:</p>
						<p>Date:</p>
						<p>Time:</p>
						<p> Description: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
							quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
						<div className = 'btn-group'>
							<a className = 'btn btn-info'>View</a>
							<a className = 'btn btn-primary'>Register</a>
						</div>
					</div>
				</div>
			)
	}
}