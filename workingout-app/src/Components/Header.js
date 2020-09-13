import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


function Header() {
	return (
		<div>
			<nav>
				<Link to='/'>
					<Button variant='outline-dark' className="homeButton"> Home </Button>
				</Link>
				<Link to='/create' className='header-middle'>
					<Button variant='outline-dark' className="exerciseButton">New Exercise</Button>
				</Link>
				
			</nav>
		</div>
	);
}

export default Header;
