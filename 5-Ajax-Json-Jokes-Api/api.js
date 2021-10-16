const buttton = document.querySelector('.get-jokes');
const inputNumber = document.querySelector('#number');
const jokes = document.querySelector('.jokes');

button.addEventListener('click',function(event){
    event.preventDefault();
    const inputValue = inputNumber.value;
    // https://api.icndb.com/jokes/random/2

    const xhr = new XMLHttpRequest()
    xhr.open("GET",`https://api.icndb.com/jokes/random/${inputValue}`,true);
    xhr.onload = function(){
        if(this.status == 200){
            const data = JSON.parse(this.responseText);
            let output = '';

            if (data.type === 'success') {
                const jokesItem = data.value;
                jokesItem.forEach(function(singleJoke){
                    output += `<li>${singleJoke.joke}</li>`;
                })
            }else{
                output = `<li>some error occured!</li>`;
            }


            jokes.innerHTML = output;
            // console.log(data,"data");
        }
    }
    xhr.onerror = function(){
        console.error('some error');
    }
    xhr.send();
})
