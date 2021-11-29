const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require("cors");
const firebase = require("./routes/userRouter");

app.use(bodyParser.json());
app.use(cors());



app.listen(4000, () => {
    console.log('Authentication service started on port 4000');
});

const accessTokenSecret = 'youraccesstokensecret';

// defining user
const users = [
    {
        username: 'rahul',
        password: '1234567890',
        role: 'admin'
    }, {
        username: 'anna',
        password: 'password123member',
        role: 'member'
    }
];

//login functionality
app.post('/login', (req, res) => {
    // Read username and password from request body
    const { username, password } = req.body;

    // Filter user from the users array by username and password
    const user = users.find(u => { return u.username === username && u.password === password });

    if (user) {
        // Generate an access token
        const accessToken = jwt.sign({ username: user.username,  role: user.role }, accessTokenSecret);

        res.json({
            accessToken
        });
    } else {
        res.send('Username or password incorrect');
    }
});

