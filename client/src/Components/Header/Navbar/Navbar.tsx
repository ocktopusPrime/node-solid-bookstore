import { Link } from 'solid-app-router';
import { Badge } from 'solid-bootstrap'
import './Navbar.scss';

export const Navbar = () => {
	return (
		<ul id='navlist'>
			<li>
			<h5>
				<Badge bg="dark"><Link href='/'>Index</Link></Badge></h5>				
			</li><li>
			<h5><Badge bg="dark"><Link href='/blog'>Collection</Link></Badge></h5>
			</li>
			<li>
			<h5><Badge bg="dark"><Link href='/aboutUs'>About Us</Link></Badge></h5>
			</li>
		</ul>
	);
};
