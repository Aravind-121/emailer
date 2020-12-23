const Mailer = require('../services/Mailer');
const mongoose = require('mongoose');
const mailTemplate = require('../services/mailTemplate');
const isLoggedIn = require('../middlewares/isLoggedIn');

const Mails = mongoose.model('mails');

module.exports = app => {

    app.get('/api/mails',isLoggedIn,async(req,res)=>{

        const result = await Mails.find({ _user: req.user.id });

        res.send(result);

    })


    app.post('/api/create', isLoggedIn, async(req,res)=>{
        
        const { title, subject, body, recipients} = req.body;
        

        const mail = new Mails({
            title, subject, body, recipients: recipients.split(","), _user: req.user.id, dateSent: Date.now()
        });


        //Mailer 
        const mailer = new Mailer(mail, mailTemplate(mail));

        try {
            // console.log(mail);
            await mailer.send();
            await mail.save();
            
            const user = req.user;
            res.send(user);
        } catch (err) {
            res.status(422).send(err);
        }
        
    })
};