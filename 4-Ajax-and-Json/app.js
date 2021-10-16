const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');

button1.addEventListener('click',function(event){
    event.preventDefault();
    // alert('button1');
    const xhr = new XMLHttpRequest();
    xhr.open('GET','customer.json',true);
    xhr.onload = function(){
        console.log(this.status);
        if (this.status == 200) {
            const data = JSON.parse(this.responseText);
            const output = `
                <ul>
                    <li>ID: ${data.id}</li>
                    <li>NAME: ${data.name}</li>
                    <li>COMPANY: ${data.company}</li>
                    <li>PHONE: ${data.phone}</li>
                </ul>
            `;
            document.getElementById('customer').innerHTML = output;
        }
    }
    xhr.onerror = function(){
        console.error('some error');
    }
    xhr.send();
});

button2.addEventListener('click',function(event){
    event.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.open("GET","customers.json",true);
    xhr.onload = function(){
        if (this.status == 200) {
            const data = JSON.parse(this.responseText);
            console.log(data,"data");
            if (data) {
                let output = '';
                data.map(function(singleData){
                    output += `
                        <ul>
                            <li>ID: ${singleData.id}</li>
                            <li>NAME: ${singleData.name}</li>
                            <li>COMPANY: ${singleData.company}</li>
                            <li>PHONE: ${singleData.phone}</li>
                        </ul>
                    `;
                });
                document.getElementById('customers').innerHTML = output;
            }
            
        }
    }
    xhr.onerror = function(){
        console.log(error);
    }
    xhr.send();
});