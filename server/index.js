
const express = require('express'); 
const cors = require('cors');
const twilio = require('twilio'); 

//twilio requirements -- Texting API 
const accountSid = 'AC7452d9f07bb945305023cb66552ec47f';
const authToken = 'faf12cd4ebf767c3e793ea590e8f2919'; 
const client = new twilio(accountSid, authToken);

const app = express(); //alias

app.use(cors()); //Blocks browser from restricting any data

//Welcome Page for the Server 
app.get('/', (req, res) => {
    res.send('Welcome to the Express Server')
})

//Twilio 
app.get('/send-text', (req, res) => {
    //Welcome Message
    

    //_GET Variables
    const { recipient, textmessage } = req.query;


    //Send Text
    client.messages.create({
        body: textmessage,
        to: "+91" + recipient,  // Text this number
        from: '+15854408536' // From a valid Twilio number
    }).then((message) => console.log(message.body)).catch(error => console.log(error));
    res.send('Hello to the Twilio Server')
})

app.listen(4000, () => console.log("Running on Port 4000"))