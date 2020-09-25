const fs = require('fs');

// directory path
const dir = './static/data';
const files = fs.readdirSync(dir);
export function get(req, res, next) {
	// the `slug` parameter is available because
	// this file is called [slug].json.js
	const { slug } = req.params;

	if (files) {
		res.writeHead(200, {'Content-Type': 'application/json'});
		res.end(JSON.stringify(files));
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify({
			message: `Not found`
		}));
	}
}