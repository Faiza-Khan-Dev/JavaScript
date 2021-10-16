// document.querySelector('button').addEventListener('click',function(){
//     alert('working')
// })

// document.querySelector('button').addEventListener('click',btnFunction);

// function btnFunction(){
//     alert('working');
// }


const posts = [
    // {title:'Post One',body:'This is Post one'},
    // {title:'Post Two',body:'This is Post two'}
];

console.log(posts,"posts");

// function createPost(post){
//     setTimeout(function(){
//         posts.push(post);
//     },1000)
// }

// createPost({title:"Post Three",body:"This is Post Three"})



function createPost(post,callback){
    setTimeout(function(){
        posts.push(post);
        callback();
    },1000)
}

createPost({title:"Post Three",body:"This is Post Three"},getPosts);

function getPosts(){
    setTimeout(function(){
        let output = '';
        posts.forEach(function(singlePost){
            output += `<li>${singlePost.title}</li>`
        });
        // document.body.innerHTML = output;
        document.querySelector('#output').innerHTML = output;
    },1000)
}