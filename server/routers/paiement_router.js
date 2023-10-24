
const Stripe = require ('stripe');
const stripe = Stripe('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')

const router= require('express').Router()

router.post('/create-checkout-session', async(req,res)=>{
    const line_items=req.body.state.map(item=>{
        return {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: item.product.title,
                        description: item.product.description,
                        metadata:{
                            id:item.product._id
                        }
                    },
                    unit_amount: item.product.prix*100,
                },
                quantity: item.quantity,
            }
        
    })
    const session = await stripe.checkout.sessions.create({
        line_items,
        mode: 'payment',
        success_url: 'http://localhost:3000/success',
        cancel_url: 'http://localhost:3000/cancel',
    });
    res.send({url:session.url });
})
module.exports= {
    paiement_router:router
}