import './Footer.scss';
import { Toast } from 'solid-bootstrap'


export const Footer = () => {
	return (
		<div id='footer'>
			<p>{[
  "Primary",
  
  
].map((variant, idx) => (
  <Toast class="d-inline-block m-2" bg={variant.toLowerCase()}>
    <Toast.Header>
      <img
        src="holder.js/20x20?text=%20"
        class="rounded me-2"
        alt=""
      />
      <strong class="me-auto">Green Team CS492-2203B-01</strong>
      
    </Toast.Header>
    <Toast.Body class={variant === "Dark" ? "text-white" : ""}>
      Thank CTU for All You've Given Us
    </Toast.Body>
  </Toast>
))}</p>

		</div>
	);
};
