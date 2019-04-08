// setTimeout(() => {
//     console.log('Two seconds are up')
// }, 2000);

// const names = ['Tom', 'Res','Nate']
// const shortNames = names.filter((name) => {
//     return name.length <=4
// })

// const geocode = (address, callback) =>{
//    setTimeout(() => {
//        const data = {
//            longitude: 0,
//            latitude: 0
//        }
//        callback(data);
//    }, 2000);
// }

// geocode('Philidelphai',(callbackData) => {
//     console.log(callbackData)
// })

//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const sumCallback = (sum)=>{
    console.log(sum)
}


const add = (num1,num2,summCallBack) => {
    setTimeout(() => {
        summCallBack(num1 + num2)
    }, 2000);
}

add(1,4,sumCallback)

