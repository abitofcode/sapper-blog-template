import sirv from 'sirv';
import express from 'express';
import compression from 'compression';
import * as sapper from '@sapper/server';

const { PORT, NODE_ENV } = process.env;
const dev = false;// NODE_ENV === 'development';
console.log("MODE: " + dev)


express() // You can also use Express
	.use(
		compression({ threshold: 0 }),
		 express.static('static', {setHeaders: function(res, path) {
			res.setHeader("Expires", new Date(Date.now() + 2592000000*30).toUTCString());
		  }}),
		//sirv('static', { dev, etag: false, maxAge: 3600}),
		sapper.middleware()
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
