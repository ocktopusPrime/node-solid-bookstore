import { Login } from './Login_Register/Login';
import { Navbar } from './Navbar/Navbar';
import { ShoppingCart } from './ShoppingCart/ShoppingCart';
import './Header.scss';
import { Register } from './Login_Register/Register';

export const Header = () => {
	return (
		<div id='header'>
			<div id='header-links'>
				<Navbar />
			</div>

			<div id='application-title'>
				<h1>
					<span style='background-color: green'>Olaf's Rare Bookstore</span>
				</h1>
			</div>

			<div id='header-buttons'>
				<Login />
				<Register />
				<ShoppingCart />
			</div>
		</div>
	);
};
