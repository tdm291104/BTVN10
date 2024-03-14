// Thành công: resolve()
// Thất bại: reject()
// Trạng thái: + pending(cho) resolve và reject chưa được gọi
//             + fullfiled: resolve()
//             + reject: reject()
// Một promise có nhiều then

const myPromise = new Promise((resolve, reject) => {
    if (1>0)
        resolve('Hey gai')
    else    
        reject()
});

myPromise
.then((param)=>{
    console.log(param)
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('HEHE')
        }, 1500)
    })
})
.then((param)=>{
    console.log(param)
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('HEHEHEHE')
        }, 2000)
    })
})
.then((param)=>{
    console.log(param)
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            reject()
        }, 2000)
    })
})
.then((param)=>{
    console.log(param)
})
.catch(()=>{
    console.log("Thuc hien catch")
})
.finally(()=>{
    console.log("Thuc hien finally")
})

// Tạo resolve, reject nhanh
const fastResolve = Promise.resolve('hehe')
fastResolve.then((param)=>{
    console.log('Param is here: ', param)
})
const fastReject = Promise.reject('loi')
fastReject.then((param)=>{
    console.log('Param is here": ', param)
})