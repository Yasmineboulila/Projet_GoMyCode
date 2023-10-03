const nodemailer = require("nodemailer")


const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: "boulila.yas2002@gmail.com",
      pass: "ahfliwynyjbivqij",
    },
  });
  transporter.verify((error,success)=>{
    if(error){
        console.log(error)
    }else if(success){
        console.log("server ready to send mail")
    }
  })

  const sendmail =(async(req,res)=>{
    try {
       await transporter.sendMail({
            from:"yasmine@gmail.com",
            to:"boulila.yas2002@gmail.com",
            subject:req.body.subject,
            text:req.body.text,
            html:`<h1>Hello </h1>`
          })
          res.status(200).send("mail sent")
    } catch (error) {
        res.status(500).send(error)
    }
  
  
})

module.exports={sendmail}