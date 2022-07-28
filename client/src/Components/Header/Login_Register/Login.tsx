import { Button, Modal } from 'solid-bootstrap';
import { Form } from 'solid-bootstrap';
import { createSignal } from 'solid-js';
import '../Header.scss';

export const Login = () => {
	const [show, setShow] = createSignal(false);
	const handleOpen = () => setShow(true);
	const handleClose = () => setShow(false);
	const handleLogin = () => alert('Congrats on logging in!');

	return (
		<>
			<Button id='login-btn' variant='primary' onClick={handleOpen}>
				Login
			</Button>

			<Modal
				show={show()}
				onHide={handleClose}
				size='sm'
				aria-labelledby='contained-modal-title-vcenter'
				centered
			>
				<Modal.Header>
					<Modal.Title id='contained-modal-title-vcenter'>User Login</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<Form>
						<Form.Group class='mb-3' controlId='formBasicEmail'>
							<Form.Label>Email address</Form.Label>
							<Form.Control type='email' placeholder='Enter email' />
							<Form.Text class='text-muted'></Form.Text>
						</Form.Group>

						<Form.Group class='mb-3' controlId='formBasicPassword'>
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
