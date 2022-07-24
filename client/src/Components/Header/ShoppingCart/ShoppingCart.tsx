import { Button } from 'solid-bootstrap';
import { TiShoppingCart } from 'solid-icons/ti';

export const ShoppingCart = () => {
	return (
		<div>
			<Button variant='light'>
				<TiShoppingCart size={24} color='#000000' />
			</Button>
		</div>
	);
};
