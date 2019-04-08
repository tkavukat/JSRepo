const stripe = require("stripe")

const Invoice = (key,callback)=>{
  const invoice = 'in_1EM1zJLLmG3lvb4lqI5yk6AP'
  var stripe = require("stripe")("sk_test_LFXMj1CxixZVsgcMHH7ZaBt1");

  stripe.invoices.retrieve(
      invoice,
      (err, invoice) => {
        // asynchronously called
          if(err){
              callback(err,undefined)
          }
          else{
              //callback
              callback(undefined,invoice)
          }
      }
    );
}
  
const stripeCall = (key) => {
  //get the invoice

  //then get the subscription and product details separately

  //build the json for QB Online

}

module.exports = stripeInvoice


