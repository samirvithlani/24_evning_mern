
const searchDish =() =>{

    console.log("searching dish")

    return new Promise((res,rej)=>{

        setTimeout(() => {
            res({id:1,name:"pizza",price:200})
        }, 3000);
    })


}
const payment = (dish)=>{

    console.log("payment processing")

    return new Promise((res,rej)=>{

        setTimeout(() => {
            res({dish:dish,transactionId:1234})
        }, 3000);
    })



}


const zomato =()=>{

    console.log("welcome to zomato")

    searchDish().then((dish)=>{
        console.log(dish)

        payment(dish).then((paymentData)=>{
            console.log(paymentData)
            console.log("thanks for ordering payment done..")
        }).catch((err)=>{
            console.log(err)
        })

    }).catch((err)=>{
        console.log(err)
    })



}

zomato()