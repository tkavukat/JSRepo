const stripe = require('./utils/stripeCall.js')

stripe('sk_test_LFXMj1CxixZVsgcMHH7ZaBt1',(err,response) => {
    if(err){
        console.log(err)
    }
    else {
        console.log(response)
    }
})
