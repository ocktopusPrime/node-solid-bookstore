const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Setup express app
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Specify the Port where the backend server can be accessed and start listening on that port
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port}.`));

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));

	app.get('*', (req, res) =>
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
	);
}
