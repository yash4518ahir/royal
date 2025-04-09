//to,from,subject,text

const mailer = require('nodemailer')

//function

const sendingMail = async(to,subject,text) => {
    const transporter = mailer.createTransport({
        service:'gmail',
        auth:{
            user:"parthparmar2706@gmail.com",
            pass:"zvii dznk pkmd uprw"
        }
    })

    const mailOptions = {
        from: 'parthparmar2706@gmail.com',
        to:'sataparahetkumar@gmail.com',
        subject: '',

    }

    const mailresponse = await transporter.sendMail(mailOptions);
    console.log(maolresponse);
    return mailresponse;
}

module.exports={
    sendingMail
}