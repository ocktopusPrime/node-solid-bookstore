import { Login } from './Login_Register/Login';
import { Navbar } from './Navbar/Navbar';
import { ShoppingCart } from './ShoppingCart/ShoppingCart';
import './Header.scss';

export const Header = () => {
	return (
		<div id='header'>
			<div id='header-links'>
				<Navbar />
			</div>
			<div id='header-buttons'>
				<Login />
				<ShoppingCart />
			</div>
		</div>
	);
};
