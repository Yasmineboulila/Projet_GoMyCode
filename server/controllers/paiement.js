const axios=require("axios")
const API_KEY="650b01fe98aff9140f6e6067:LZkY1WyaaVRy2mQqYZRkfD7qUuvrUW"
module.exports={
    paiemente:(async(req,res)=>{
        console.log(req.body)
        try {
        
            const response = await axios.post(
                "https://api.konnect.network/api/v2/payments/init-payment",
                req.body,
                {
                    headers: {
                        "x-api-key": API_KEY
                    }
                }
            );
            
        res.json({url:response.data.payUrl,msg:'ok'})
            
        } catch (error) {
            res.status(500).send(error)
        }

    })
}