const mailer=require('nodemailer')
const { format } = require('path')

const sendingMail=async(to,subject,text)=>{

    const transporter=mailer.createTransport({
        service:'gmail',
        auth:{
            user:"mern61750@gmail.com",
            pass:"zvcm yvci jxfc hivc"
        }
    })

    const mailOptions={
        form:'mern61750@gmail.com',
        to:to,
        subject:subject,
        text:text
    }

    const mailresponse=await transporter.sendMail(mailOptions)
    console.log(mailresponse)
    return mailresponse
}

module.exports={ sendingMail}