import { Component } from 'react'
import { AddEvent } from './AddEvent'
import { Event } from './Event'
import { Nav } from './Nav'

export class App extends Component {
	render() {
		return (
			<div>
				<Nav />
				<div className = 'row' >
					<div className = 'col-sm-1 col-lg-4'>
						<AddEvent />
						<Event />
					</div>
				</div>
			</div>
			)
	}
}