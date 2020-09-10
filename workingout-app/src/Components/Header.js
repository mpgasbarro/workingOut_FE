import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


function Header() {
	return (
		<div>
			<nav>
				<Link to='/'>
					<Button variant='outline-info'> Home </Button>
				</Link>
				<Link to='/create' className='header-middle'>
					<Button variant='outline-info'>New Workout</Button>
				</Link>
			</nav>
		</div>
	);
}

export default Header;
