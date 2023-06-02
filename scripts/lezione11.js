// pormise e fetch
// const testo="stringa di testo"
// const promise=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         const number=Math.random()*100;
//         if(number>50){
//             resolve(number);// è un metodo js
//         }else{
//             reject("errore la condizione non è rispettata");//è un metodo js
//         }

//     },2000);
// });

// // per gestire il caso di riuscita della promise si usa then
// promise.then(result=>{
//     console.log(`la condizione viene rispetata`,result);
// });
// // per gestire il caso di non riuscita
// promise.catch(error=>{
//     console.log(error);
// });


// console.log(testo);

// function fetchUserData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let userData={
//                 nome:"Riccardo",
//                 cognome:"Riccardo",
//                 email:"upchh@example.com",
//                 password:"123456"
//             };

//             if(userData){
//                 resolve(userData);
//             }else{
//                 reject("errore");
//             };
//         });
//     },2000);

// };

// fetchUserData()
//   .then(data=>{
//         console.log(data);
//     })
//     .catch(error=>{
//         console.log(error);
//     });


function fetchUserData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let userData={
                nome:"Riccardo",
                cognome:"Riccardo",
                email:"upchh@example.com",
                password:"123456"
            };

            if(userData){
                resolve(userData);
            }else{
                reject("errore");
            };
        });
    },2000);
};

function fetchUserSubsciption(){
    setTimeout(()=>{
        let userSubscription={
            subscription:"premium",
            price:1000
        }
    },2000)
    if(userSubscription){
         
    }{
 
    }
}

fetchUserData()
.then(user=>{
     console.log(user);
})
