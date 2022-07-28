import { Button } from 'solid-bootstrap';
import { Form } from 'solid-bootstrap';
import { FormControl } from "solid-bootstrap";
import { TiShoppingCart } from 'solid-icons/ti';
import { OverlayTrigger } from 'solid-bootstrap';
import { Popover } from 'solid-bootstrap';
import { InputGroup } from "solid-bootstrap";
export const ShoppingCart = () => {
	return (
		<div>



			

<OverlayTrigger
  trigger="click"
  offset={[0, 8]}
  placement="right"
  overlay={
    <Popover id="popover-basic">
	
      <Popover.Header as="h3">Shopping Cart</Popover.Header>
      <Popover.Body>
	  <Form>
	  <Button variant='light'>
				<TiShoppingCart size={24} color='#000000' />
			</Button><h4>Checkout</h4><br></br><br></br><br></br><br></br><br></br><br></br>
			
			<InputGroup class="mb-3">
  <InputGroup.Text>$</InputGroup.Text>
  <InputGroup.Text>"0.00"</InputGroup.Text>
  <FormControl aria-label="altfords"/>
</InputGroup>

<Button variant='secondary'>
				Clear Cart
			</Button>
<Button variant='primary'>
				Checkout
</Button>
				</Form>
			
      </Popover.Body>
   </Popover>
  }
>
<Button variant='light'>
				<TiShoppingCart size={24} color='#000000' />
			</Button>




				</OverlayTrigger>
			
		</div>
	);
};
