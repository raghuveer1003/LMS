const express = require('express');
const bodyParser = require('body-parser');
const stripe = require('stripe')('your-secret-key-here');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/submit_payment', async (req, res) => {
    const { stripeToken, name, email } = req.body;
    
    try {
        const charge = await stripe.charges.create({
            amount: 5000, // Amount in cents
            currency: 'usd',
            description: 'Java Course',
            source: stripeToken,
            receipt_email: email,
        });
        res.send(`Payment successful for ${name}`);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
