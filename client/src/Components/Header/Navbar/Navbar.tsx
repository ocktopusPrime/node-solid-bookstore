import { Link } from 'solid-app-router';
import './Navbar.scss';

export const Navbar = () => {
	return (
		<ul id='navlist'>
			<li>
				<Link href='/'>Home</Link>
			</li>
			<li>
				<Link href='/blog'>Blog</Link>
			</li>
			<li>
				<Link href='/aboutUs'>About Us</Link>
			</li>
		</ul>
	);
};
