let express = require("express"); // Load express module
let bodyParser = require("body-parser"); // Load body-parser module
let userRouter = require('./routes/userRouter'); // Load user router module
let login = require('./login'); // Load user admin-token

// Express
let app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const nodemailer = require('nodemailer');
// var smtpTransport = require('nodemailer-smtp-transport');



const port = process.env.PORT || 5000;


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});


const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
        user: 'rahulthangamani2002@gmail.com',
        pass: '8608340306',
    },
    tls: {
        rejectUnauthorized: false
      },
    secure: true, // upgrades later with STARTTLS -- change this based on the PORT
});

app.post('/text-mail', (req, res) => {
    const {to, subject, text } = req.body;
    const mailData = {
        from: 'rahulthangamani2002@gmail.com',
        to: to,
        subject: subject,
        text: text,
        html: '<b>Hey there! </b><br> This is our first message sent with Nodemailer<br/>',
    };

    transporter.sendMail(mailData, (error, info) => {
        if (error) {
            return console.log(error);
        }
        res.status(200).send({ message: "Mail send", message_id: info.messageId });
    });
});

// Routes
app.use('/users',userRouter);

// Server
app.listen(3000);
console.log('API is running on port 3000');