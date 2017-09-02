import { Component } from 'react'

export class AddEvent extends Component {
	render() {
		return (
			<form>
				<h2> Add Event </h2>

				<div className = 'form-group'>
					<label htmlFor = "name">Name</label>
					<input className = 'form-control' id = 'name' type = 'text' />
				</div>

				<div className = 'form-group'>
					<label htmlFor = 'venue'>Venue</label>
					<input className = 'form-control' id = 'venue' type = 'text'/>
				</div>

				<div className = 'form-group'>
					<label htmlFor = 'venue'>Date</label>
					<input className = 'form-control' id = 'date' type = 'date'/>
				</div>

				<div className = 'form-group'>
					<label htmlFor = 'time'>Time</label>
					<input className = 'form-control' id = 'time' type = 'time'/>
				</div>

				<button type= 'submit' className = 'btn btn-primary' >Submit</button>

			</form>
		)
	}
}