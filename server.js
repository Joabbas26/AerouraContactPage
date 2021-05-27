const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

//Bring the Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/forma', (req, res) => {
    let data =req.body
    let smtpTransport = nodemailer.createTransport({
        service:'Gmail',
        port:465,
        auth:{
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });

let mailOptions={
    from:data.email,
    to: process.env.EMAIL,
    subject:`Message from ${data.name}`,
    html:`
        
    <h3>Informations</h3>
        <ul>
        <li>Name: ${data.name}</li>
        <li>Lastname: ${data.lastname}</li>
        <li>Email: ${data.email}</li>
        <li>PhoneNumber: ${data.phonenumber}</li>
        </ul>

        <h3>Message</h3>
        <p>${data.message}</p>
        
    `
};

smtpTransport.sendMail(mailOptions, (error, response)=>{
    if(error){
        res.send(error)
    }
    else{
        res.send('Success')
    }
})

smtpTransport.close();

})

const PORT = process.env.PORT || 3002;
app.listen(PORT,() =>{
    console.log(`Server starting at port ${PORT}`);
});