const express = require('express');
const cors = require('cors');
const { default: axios } = require('axios');

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post('/authenticate', async (req, res) => {
	const { username } = req.body;
	try {
		const r = await axios.put(
			'https://api.chatengine.io/users/',
			{ username: username, secret: username, first_name: username },
			{ headers: { 'private-key': 'cfc57af1-1c74-41cb-bce4-279db0fca585' } }
		);
		return res.status(r.status).json(r.data);
	} catch (e) {
		// Check if e.response exists to avoid crashing
		if (e.response) {
			return res.status(e.response.status).json(e.response.data);
		} else {
			// Handle other types of errors, like network issues
			return res.status(500).json({ error: 'Something went wrong.' });
		}
	}
});

app.listen(3001, () => {
	console.log('Server is running on port 3001');
});
