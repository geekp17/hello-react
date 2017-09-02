import { Component } from 'react'

export class AddEvent extends Component {
	render() {
		return (
			<form className = 'pure-form pure-form-aligned'>
				
				<fieldset>
					<div className = 'pure-control-group'>
						<label htmlFor = "name">Name</label>
						<input id = 'name' type = 'text' placeholder = "Name"></input>
					</div>

					<div className = 'pure-control-group'>
						<label htmlFor = 'venue'>Venue</label>
						<input id = 'venue' type = 'text' ></input>
					</div>

					<div className="pure-control-group">
            			<label htmlFor="password">Password</label>
            			<input id="password" type="password" placeholder="Password"></input>
        			</div>

					<div className = "pure-controls">
            			<button type="submit" class="pure-button pure-button-primary">Submit</button>
        			</div>

				</fieldset>
			</form>
		)
	}
}