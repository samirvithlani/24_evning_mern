// const getData = ()=>{


//         console.log("starts...")

//         setTimeout(() => {
//             console.log("processing...")    
//         }, 3000);
        

//         console.log("ends...")


// }
// getData()



const getData = ()=>{



    console.log("starts")
    var promise = new Promise((resolve,reject)=>{

        // resolve("data fetched")
        setTimeout(() => {
           //     resolve("data fetched")
           reject("error")
        }, 3000);
    })

    console.log(promise)

    promise.then((data)=>{
        console.log(data)
    })
    promise.catch((err)=>{
        console.log(err)
    })

    console.log("ends")



}

//getData()   


const fetchData = ()=>{


return new Promise((success,fail)=>{

    setTimeout(() => {
        success({id:1,name:"raj"})
    }, 2000);
})
}

// const x = fetchData()
// console.log(x)
// x.then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })

console.log("starts")


fetchData().then((data)=>{
console.log(data)
console.log("data fetched")
}).catch((err)=>{
console.log(err)
})

console.log("ends")