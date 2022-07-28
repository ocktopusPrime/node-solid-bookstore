import { Button, Modal } from 'solid-bootstrap';
import { Form } from 'solid-bootstrap';
import { OverlayTrigger } from 'solid-bootstrap';
import { createSignal } from 'solid-js';

export const Register = () => {
	const [show, setShow] = createSignal(false);
	const handleOpen = () => setShow(true);
	const handleClose = () => setShow(false);
	const handleLogin = () => alert('Congrats on signing up!');

	return (
		<>
			<Button id='register-button' variant='success' onClick={handleOpen}>
				Register
			</Button>

			<Modal
				show={show()}
				onHide={handleClose}
				size='sm'
				aria-labelledby='contained-modal-title-vcenter'
				centered
			>
				<Modal.Header>
					<Modal.Title>New User Registration</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<Form>
						<Form.Group class='mb-3' controlId='formBasicEmail'>
							<Form.Label>Email address</Form.Label>
							<Form.Control type='email' placeholder='Please Provide Valid Email' />
							<Form.Text class='text-muted'></Form.Text>
						</Form.Group>

						<Form.Group class='mb-3' controlId='formStrongPassword'>
							<Form.Label>Password</Form.Label>
							<Form.Control type='password' placeholder='Password' />
						</Form.Group>
					</Form>
				</Modal.Body>

				<Modal.Footer>
					<Button onClick={handleClose} variant='secondary'>
						Close
					</Button>
					<Button onClick={handleLogin} variant='primary' type='submit'>
						Submit
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};
