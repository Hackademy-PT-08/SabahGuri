// esercizio 1
let momIsHappy=false;
const promise=new Promise((resolve,reject)=>{
setTimeout(()=>{
    if(momIsHappy){
        resolve(`ottimo lavoro la mamma è felice`);
    }else{
        reject(`pessimo lavoro, hai fatto arrabbiare la mamma`);
    }
},2000)
});
promise
.then((result)=>{
    console.log(result)
})
.catch((error)=>{
    console.log(error)
})

