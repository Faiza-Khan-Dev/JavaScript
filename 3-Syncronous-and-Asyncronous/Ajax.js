const button = document.getElementById('button');

button.addEventListener('click',loadData);
function loadData(){
    
    // Create an XHR Object
    const xhr = new XMLHttpRequest();

    //1st parameter request method
    //2nd parameter request url
    //3rd parameter boolean is asyncronus or not

    console.log('READYSTATE', xhr.readyState);

    //OPEN
    xhr.open('GET','data.txt',true);

    // // Optional - Used for spinners/loaders
    xhr.onprogress = function(){
        // console.log('READYSTATE', xhr.readyState);
    }

    xhr.onload = function(){
        // console.log('READYSTATE', xhr.readyState);
        console.log(this.status,"status");
        if (this.status == 200) {
            document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
        }
    }

    xhr.onerror = function() {
        console.log('Request error...');
    }
    

    // xhr.onreadystatechange = function() {
    //   console.log('READYSTATE', xhr.readyState);
    //   if(this.status === 200 && this.readyState === 4){
    //     // console.log(this.responseText);
    //     document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
    //   }
    // }

    xhr.send();
}