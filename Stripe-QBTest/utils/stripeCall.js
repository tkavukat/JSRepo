const stripe = require("stripe")("sk_test_LFXMj1CxixZVsgcMHH7ZaBt1");

const stripeInvoice = (key,callback)=>{
    stripe.invoices.retrieve(
        key,
        (err, invoice) => {
          // asynchronously called
            if(err){
                
            }
            else{
                //callback
            }
        }
      );
}
  



