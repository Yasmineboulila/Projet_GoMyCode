const accountSid = 'AC13d431cac667e1cfc8cba7098e0b0ef6';
const authToken = '647b625d16087de9939293f3311cd24e';
const client = require('twilio')(accountSid, authToken);
module.exports={
    sendsms:((req,res)=>{
        client.messages
        .create({
            body:"message sent successfuly",
                    from: '+12563652202',
            to: '+21656010344'
        })
        .then(message => {
            res.status(200).send({message,msg:"message sent"})
           
        }).catch((error)=>{
            res.status(500).send(error)
        })
        
    })
  
}