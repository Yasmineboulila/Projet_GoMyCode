const accountSid = 'ACdba1faded0361a28143045d6e896b9d2';
const authToken = 'cbcce573dbb822c08d5a95ce2ceeb28f';
const client = require('twilio')(accountSid, authToken);
module.exports={
    sendsms:((req,res)=>{
        client.messages
        .create({
            body:"success",
                    from: '+19283795672',
            to: '+21656010344'
        })
        .then(message => {
            res.status(200).send({message,msg:"message sent"})
        }).catch((error)=>{
            res.status(500).send(error)
        })
        
    })
  
}