// Sync
// const wasi = 'wasi';
// console.log(wasi);

// hsfgsjdfhk

// const hammad = 'hammad';
// console.log(hammad);

// Async

const faiza = 'faiza';
console.log(faiza);

// Callback
setTimeout(function(){
    fgbjhsfdgkj
},1000);

const iman = 'iman';
console.log(iman);

// Promises

const doSomeThing = new Promise(function(resolve,reject){
    const success = "working";
    if (success == "working") {
        resolve({
            name:"faiza",
            last:"iman",
            add:"north karachi",
        });
    } else{
        reject('this error occurred');
    }
});

doSomeThing
.then(function(responce){
    console.log(responce,"responce");
})
.catch(function(error){
    console.error(error);
});

function fetch(url){
    return new Promise(function(resolve,reject){

    })
}

const getTodosData = function(){
    return fetch('https://jsonplaceholder.typicode.com/todos')
    .then(function(responce){
        return responce.json();
    })
    .then(function(data){
        return data;
    })
    .catch(function(error){
        return error;
    })
}

// Async Await
const doSomethingAsyncAwait = async function (){
    const data = await getTodosData();
    console.log(data);
    if(data){
        data.forEach(singlItem=>{
            console.log(singleItem);
        })
    }
}

doSomethingAsyncAwait();


// JSON VS XML 

// JSON Example
// {"employees"[
//     { "fName":"John", "lName":"Doe" },
//     { "fName":"Anna", "lName":"Smith" },
//     { "fName":"Peter", "lName":"Jones" }
// ]}

// XML Example
{/* <employees>
    <employees>
        <fName>John</fName> <lName>Doe</lName>
    </employees>
    <employees>
        <fName>Anna</fName> <lName>Smith</lName>
    </employees>
    <employees>
        <fName>Peter</fName> <lName>Jones</lName>
    </employees>
</employees> */}