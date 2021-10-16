const http = new easyHttp();

//GET

http.get("https://jsonplaceholder.typicode.com/posts/1",function(data,error){
    if(data){
        console.log(data,"data");
    }else{
        console.log(error,"error")
    }
});

// POST Data
// const data = {
//     title: 'Custom Post 2 djhgfj',
//     body: 'This is a custom post 2 kjfdhskd'
// };

// http.post('https://jsonplaceholder.typicode.com/posts', data, function(post,err) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });


// http.get("https://jsonplaceholder.typicode.com/posts/101",function(data,error){
//     console.log(data,"data");
//     console.log(error,"error");
// });


//PUT REQUEST

// Create Data
// const dataUpdate = {
//     title: 'Custom Post 2 jfhgsjdf',
//     body: 'This is a custom post 2 gkherfdr'
// };

// http.put('https://jsonplaceholder.typicode.com/posts/1', dataUpdate, function(post,err) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

//DELETE REQUEST

// http.delete("https://jsonplaceholder.typicode.com/posts/1",function(data,error){
//     if(data){
//         console.log(data,"data");
//     }else{
//         console.log(error,"error")
//     }
// });

// console.log(easyHttpVar);

