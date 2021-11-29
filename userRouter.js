let express = require('express'); // Load Express
const firebase = require("firebase-admin");

// Initialize Firebase

var admin = require("firebase-admin");
admin.initializeApp({
	credential: admin.credential.cert({
	 "project_id": "user-f267d",
	 "client_email": "firebase-adminsdk-izek1@user-f267d.iam.gserviceaccount.com",
	 "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDeYhRb2+qkz8Ov\nyE6a7PTK9gjqCFXaMwds2hR2mGG+VoMYUKEmV+r3f2n+9SaS+XycwbJyyxgBtkg4\nAkXNNE8yp3DQ4feysP1y+P7aRwMEZFV46uP/0jnIe/RgqsTOciLW71lMQ1UPi35x\nty7kH0kLqU6axfy6UnrEdIbUj5YGnWFdvZLsCcAJfHhOKSkLW2kd71LSLiaKFS5a\nekFXMBNyHe+GmrDNX1WsFxQngKvF9SCFfqsd/avZ/DXcM0qU0WQP8l+Y3B4kSz/G\nKbvJRLrDDaruKRe0yzXQz2NDJrmSjRe7rCKigibu0Qc8ijIitTFjDLviAh9cYCSO\nl1K5q63VAgMBAAECggEAA8C/+zTg5tsiwEqvGOo6z1oLmHd/i2klDO85PS8hJycq\nmzRxI8aEDp012rmkZwKS2cpjCpDm3NCIs3lGWEozs/UjcEL//SIDhPcyxdhA8sgG\nsT21j1Gq6/k7jI4VOC6w69OqPCE+xD5kaeLfhbYJc4rt6qrAsxxFOh+FTv0FWSMy\nvcQEKjnbKdK4S/DIeaC6E/0wXcxTK7223tcEPbv3BEiNNj4FtiYFLewAsvy9YdBH\nYGE0/9MMRATav95n6c/m/n2y5NqhsZhr/VsOQEFf9pGexqarIFFxOpD1HTEWWePF\nEg+m2VpXCOWZedyK4Ps/asKHShBeg0GHN2qglv/DWQKBgQDv9NXQQYCcsKK9bulP\nuGaSVS5mWMyDdJQnXb0+W9ZaXEgN7GfYs8ygi+amLJFsLjOOnbicFAoX9ggewtBo\nC8IvmbEFs8qgRuUkIUbwngh1/j3UOaI3/M/8ZvJgjENEqHqazO4Rx2a15FwaVF2Y\nm8ZnNbQPHiybOdgRHR9XnSxYswKBgQDtQHSBzMmgaYsBFaAKwyuIYicmHKKvkV09\nfBHwwPlChJNWE6nT5Nx4CE5gU3vkuwRrVG1R7ManFidMKyxPRfovvdlVmbh7f2W9\nuIzHn/rx6t5XVjfDtuyD8XVjbp/5jIhQEUuC94iaaw/rpJUM6B5hFyNtNN4tp2IB\nohzIRorTVwKBgBqcaGnkGcNGw4WGm1E//gAUekTXbDbX4uZKuwYDYU48FbGVmh6q\nMfNMEJQ1NRtuNEGItER65HOr0VK4ACzJwQtOXBdpzPrhYeAT4K4mmIGdZHX4vki/\nPMGdGRwj8gHXPWGVgIFwP6/EV4KEAK0/+UzQ49sZWZENZSzgse0hfR2JAoGAD3ju\noDBszctUR2PTpiAITMKp7vBbI7wFKqdWvC65kr72pNxvbOQ2BJX2Fo4bPFV9+knt\nPzSD2A23zl3aa+kSYd6tt8looJU0W2UXuUUTpoc8rNFwnZDmZ8xtbWifgjTKBv65\nv/bIr9lflmyLU+YnZQmPQ+X4v111JMofumfvUc0CgYAYLzT38DmxVBKg1DxvlqNS\n5fyIf3LMHTulPmXFbtrQv82XbqQmepcgboSQeO+LNes5iSZRn+ZFFOGH3wgiFkPP\n0rRWXRicGSrIR8LBxdiakrPOXMRcoUcee1Gs+9mnqYHopRJcPEXLu64MQOr7kOXW\nkZGGOnaIeqqdIvv450Q05g==\n-----END PRIVATE KEY-----\n"
	}),
	databaseURL: "https://user-f267d-default-rtdb.firebaseio.com"
  });
  const db = admin.firestore();
// var User = require('./../models/userModel');
let usersController = require('./../controllers/usersController')(admin);

let userRouter = express.Router();

module.exports=firebase;

// /users/
userRouter.route('')
	.get(usersController.getById)
	.post(usersController.add);

// /users/:id
userRouter.route('/:id')
	.get(usersController.getById)
	.patch(usersController.patch)
	.delete(usersController.del);

// /users/email/
userRouter.route('/email')
	.post(usersController.getByEmail);

module.exports=userRouter;


