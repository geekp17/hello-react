export const Nav = () => (
		<nav className = 'navbar navbar-expand-lg navbar-ligt bg-light'>
			<a className = 'navbar-brand'>Colombo Teen Club</a>
			<button className = 'navbar-toggler' type = 'button' data-toggle= 'collapse' data-target = '#navbarNav' aria-controls = 'navbarNav' aria-expanded = 'false' aria-label = 'Toggle navigation'>
    		<span className="navbar-toggler-icon"></span>
  			</button>
  			<div className = 'collapse navbar=collapse' id = 'navbarNav'>
  				<ul className = 'navbar-nav'>
  					<li className = 'nav-item'><a className = 'nav-link'>Events</a></li>
  					<li className = 'nav-item'>Teens</li>
  				</ul>
  			</div>
		</nav>
	)