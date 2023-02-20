var http = require('http');
var fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

console.time('time : ');

const server = http.createServer(function (req, res) {
    console.log('url : ' + req.url);
    if(req.url === '/' || req.url === '/index' || req.url === '/index.html'){
        console.log('reading file index.html');
        fs.readFile('index.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html', 'Content-Length':data.length});
            res.write(data);
            r = res.end();
            return r;
        });
    } else if(req.url === '/productos' || req.url === '/productos.html'){
        console.log('url : ', req.url);
        fs.readFile('productos.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        });
    } else if(req.url === '/facturas' || req.url === '/facturas.html'){
        console.log('url : ', req.url);
        fs.readFile('facturas.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        });
    } else if(req.url === '/estilos.css'){
		fs.readFile('estilos.css', function(err, data) {
			res.writeHead(200, {'Content-Type': 'text/css'});
			res.write(data);
			return res.end();
		});
    } else if(req.url === '/estilos2.css'){
		fs.readFile('estilos2.css', function(err, data) {
			res.writeHead(200, {'Content-Type': 'text/css'});
			res.write(data);
			return res.end();
		});
    } else if(req.url === '/estilos3.css'){
		fs.readFile('estilos3.css', function(err, data) {
			res.writeHead(200, {'Content-Type': 'text/css'});
			res.write(data);
			return res.end();
		});
	} else if(req.url === '/productos.js'){
		console.log('url : ', req.url);
		fs.readFile('productos.js', function(err, data) {
			res.writeHead(200, {'Content-Type': 'text/javascript'});
			res.write(data);
			return res.end();
		});
	} else if(req.url === '/formTicket.js'){
		console.log('url : ', req.url);
		fs.readFile('formTicket.js', function(err, data) {
			res.writeHead(200, {'Content-Type': 'text/javascript'});
			res.write(data);
			return res.end();
		});
	} else if(req.url === '/ticket.buscar.js'){
		console.log('url : ', req.url);
		fs.readFile('ticket.buscar.js', function(err, data) {
			res.writeHead(200, {'Content-Type': 'text/javascript'});
			res.write(data);
			return res.end();
		});

    } else if(req.url === '/logo2.png'){
		fs.readFile('logo2.png', function(err, data) {
			res.writeHead(200, {'Content-Type': 'image/png'});
			res.write(data);
			return res.end();
		});
    } else if(req.url === '/vegetables.jpg'){
		fs.readFile('vegetables.jpg', function(err, data) {
			res.writeHead(200, {'Content-Type': 'image/jpg'});
			res.write(data);
			return res.end();
		});
    } else if(req.url === '/fruits.jpg'){
		fs.readFile('fruits.jpg', function(err, data) {
			res.writeHead(200, {'Content-Type': 'image/jpg'});
			res.write(data);
			return res.end();
		});
    } else if(req.url === '/apple.jpg'){
		fs.readFile('apple.jpg', function(err, data) {
			res.writeHead(200, {'Content-Type': 'image/jpg'});
			res.write(data);
			return res.end();
		});
    } else if(req.url === '/banana.jpg'){
		fs.readFile('banana.jpg', function(err, data) {
			res.writeHead(200, {'Content-Type': 'image/jpg'});
			res.write(data);
			return res.end();
		});
    } else if(req.url === '/broccoli.jpg'){
		fs.readFile('broccoli.jpg', function(err, data) {
			res.writeHead(200, {'Content-Type': 'image/jpg'});
			res.write(data);
			return res.end();
		});
    } else if(req.url === '/celery.png'){
		fs.readFile('celery.png', function(err, data) {
			res.writeHead(200, {'Content-Type': 'image/png'});
			res.write(data);
			return res.end();
		});
    } else if(req.url === '/celery.png'){
		fs.readFile('celery.png', function(err, data) {
			res.writeHead(200, {'Content-Type': 'image/png'});
			res.write(data);
			return res.end();
		});
    } else if(req.url === '/eggplant.jpg'){
		fs.readFile('eggplant.jpg', function(err, data) {
			res.writeHead(200, {'Content-Type': 'image/jpg'});
			res.write(data);
			return res.end();
		});
    } else if(req.url === '/garlic.jpg'){
		fs.readFile('garlic.jpg', function(err, data) {
			res.writeHead(200, {'Content-Type': 'image/jpg'});
			res.write(data);
			return res.end();
		});
    } else if(req.url === '/greenpepper.jpg'){
		fs.readFile('greenpepper.jpg', function(err, data) {
			res.writeHead(200, {'Content-Type': 'image/jpg'});
			res.write(data);
			return res.end();
		});
    } else if(req.url === '/lemon.jpg'){
		fs.readFile('lemon.jpg', function(err, data) {
			res.writeHead(200, {'Content-Type': 'image/jpg'});
			res.write(data);
			return res.end();
		});
    } else if(req.url === '/garlic.jpg'){
		fs.readFile('garlic.jpg', function(err, data) {
			res.writeHead(200, {'Content-Type': 'image/jpg'});
			res.write(data);
			return res.end();
		});
    } else if(req.url === '/line.png'){
		fs.readFile('line.png', function(err, data) {
			res.writeHead(200, {'Content-Type': 'image/png'});
			res.write(data);
			return res.end();
		});
    } else if(req.url === '/lombarda.jpg'){
		fs.readFile('lombarda.jpg', function(err, data) {
			res.writeHead(200, {'Content-Type': 'image/jpg'});
			res.write(data);
			return res.end();
		});
    } else if(req.url === '/mandarin.jpg'){
		fs.readFile('mandarin.jpg', function(err, data) {
			res.writeHead(200, {'Content-Type': 'image/jpg'});
			res.write(data);
			return res.end();
		});
    } else if(req.url === '/melon.jpg'){
		fs.readFile('melon.jpg', function(err, data) {
			res.writeHead(200, {'Content-Type': 'image/jpg'});
			res.write(data);
			return res.end();
		});
    } else if(req.url === '/onion.jpg'){
		fs.readFile('onion.jpg', function(err, data) {
			res.writeHead(200, {'Content-Type': 'image/jpg'});
			res.write(data);
			return res.end();
		});
    } else if(req.url === '/mandarin.jpg'){
		fs.readFile('mandarin.jpg', function(err, data) {
			res.writeHead(200, {'Content-Type': 'image/jpg'});
			res.write(data);
			return res.end();
		});
    } else if(req.url === '/orange.jpg'){
		fs.readFile('orange.jpg', function(err, data) {
			res.writeHead(200, {'Content-Type': 'image/jpg'});
			res.write(data);
			return res.end();
		});
    } else if(req.url === '/pear.jpg'){
		fs.readFile('pear.jpg', function(err, data) {
			res.writeHead(200, {'Content-Type': 'image/jpg'});
			res.write(data);
			return res.end();
		});
    } else if(req.url === '/plum.png'){
		fs.readFile('plum.png', function(err, data) {
			res.writeHead(200, {'Content-Type': 'image/jpg'});
			res.write(data);
			return res.end();
		});
    } else if(req.url === '/redpepper.jpg'){
		fs.readFile('redpepper.jpg', function(err, data) {
			res.writeHead(200, {'Content-Type': 'image/jpg'});
			res.write(data);
			return res.end();
		});
    } else if(req.url === '/strawberry.jpg'){
		fs.readFile('strawberry.jpg', function(err, data) {
			res.writeHead(200, {'Content-Type': 'image/jpg'});
			res.write(data);
			return res.end();
		});
    } else if(req.url === '/tomato.jpg'){
		fs.readFile('tomato.jpg', function(err, data) {
			res.writeHead(200, {'Content-Type': 'image/jpg'});
			res.write(data);
			return res.end();
		});
    } else if(req.url === '/zucchini.jpg'){
		fs.readFile('zucchini.jpg', function(err, data) {
			res.writeHead(200, {'Content-Type': 'image/jpg'});
			res.write(data);
			return res.end();
		});
    } else if(req.url === '/plum.png'){
		fs.readFile('plum.png', function(err, data) {
			res.writeHead(200, {'Content-Type': 'image/png'});
			res.write(data);
			return res.end();
		});
    } else if(req.url === '/grapes.jpg'){
		fs.readFile('grapes.jpg', function(err, data) {
			res.writeHead(200, {'Content-Type': 'image/jpg'});
			res.write(data);
			return res.end();
		});
    } else if(req.url === '/lettuce.jpg'){
		fs.readFile('lettuce.jpg', function(err, data) {
			res.writeHead(200, {'Content-Type': 'image/jpg'});
			res.write(data);
			return res.end();
		});

    } else {
        res.statusCode = 404;
        res.end();
    }
});

server.listen(port, hostname, () => {
    console.log('Server running at http://'+hostname+':'+port+'/');
});

console.log('App started');