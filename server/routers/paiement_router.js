const express=require("express")
const Stripe = require ('stripe');
const stripe = Stripe('sk_test_51O4jGZJzqOOqYxvc3CGDnY56ifzMZZvwF7fTqAjg0pSmqh9okiftzQwJVdmYwCUibFWHORfHia9c8aKlHsqxslrs00Oa3WoL82')

const paiement_router=express.Router()

paiement_router.post('/create-checkout-session', async(req,res)=>{
    console.log(req.body)
    const line_items=req.body.products.map(item=>{
        return {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: item.product.title,
                        
                        images:[item.product.image],
                        metadata:{
                            id:item.product._id,
                        }
                    },
                    unit_amount:Math.floor(item.product.prix*100), 
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
module.exports= paiement_router
