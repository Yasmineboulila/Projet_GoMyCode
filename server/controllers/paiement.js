// const axios=require("axios")
// const API_KEY="650b01fe98aff9140f6e6067:LZkY1WyaaVRy2mQqYZRkfD7qUuvrUW"
// module.exports={
//     paiemente:(async(req,res)=>{
//         console.log(req.body)
//         try {
        
//             const response = await axios.post(
//                 "https://api.konnect.network/api/v2/payments/init-payment",
//                 req.body,
//                 {
//                     headers: {
//                         "x-api-key": API_KEY
//                     }
//                 }
//             );
            
//         res.json({url:response.data.payUrl,msg:'ok'})
            
//         } catch (error) {
//             res.status(500).send(error)
//         }

//     })
// }
// const api_key = require('../configDB/config');
// const stripe = require("stripe")(api_key.stripePayment);
// const Course = require('../models/user_model')

// exports.stripeCourse =(req,res)=>{
//     const courseId = req.params.courseId;
//     Course.findById({_id:courseId})
//     .then(course=>{
//         res.status(200).json({course:course})
//     })
//     .catch(err=>{
//         console.log(err)
//     })
// }
const api_key = require('../configDB/config');
const stripe = require("stripe")(api_key.stripePayment);
const Course = require('../models/user_model')

exports.stripePayment=(req,res)=>{

    let {amount,id} = req.body;
    console.log(amount,id);

    stripe.paymentIntents.create({
        amount:amount,
        payment_method: id,
        confirm: true,
    }).then(response=>{
        console.log(response);
            res.status(200).json({
            message:"payment successful",
            success:true})}
    )
    .catch(err=>{
        console.log(err);
        res.json({
            message: "Payment Failed",
            success: false,})
    })
}