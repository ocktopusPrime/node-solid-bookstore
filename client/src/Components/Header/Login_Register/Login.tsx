import { Button } from 'solid-bootstrap';
import { Form, InputGroup } from "solid-bootstrap";
import { Popover } from 'solid-bootstrap'
import { OverlayTrigger } from 'solid-bootstrap'

export const Login = () => {
	return (
		
<OverlayTrigger
  trigger="click"
  offset={[0, 8]}
  placement="right"
  overlay={
    <Popover id="popover-basic">
      <Popover.Header as="h3">Employee Login</Popover.Header>
      <Popover.Body>
	  <Form>
  <Form.Group class="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text class="text-muted">
    </Form.Text>
  </Form.Group>

  <Form.Group class="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="username" placeholder="Username" />
  </Form.Group>

  <Form.Group class="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>


  <Button variant="primary" type="submit">Login</Button>
</Form>
      </Popover.Body>
    </Popover>
  }
>
  <Button variant="primary">Login</Button>
</OverlayTrigger>
	);
};

