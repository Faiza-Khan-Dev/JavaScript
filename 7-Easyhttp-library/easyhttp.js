function easyHttp(){
    this.http = new XMLHttpRequest();
}

easyHttp.prototype.get = function(url,callback){
    let self = this;
    self.http.open("GET",url,true);
    self.http.onload = function(){
        if (self.http.status == 200 || self.http.status == 201) {
            callback(JSON.parse(self.http.responseText),null)
        }else{
            callback(null,'Error: ' + self.http.status);
        }
    }
    self.http.send();
}

easyHttp.prototype.post = function(url,data,callback){
    let self = this;
    self.http.open("POST",url,true);
    self.http.setRequestHeader('Content-type', 'application/json');
    self.http.onload = function(){
        if (self.http.status == 200 || self.http.status == 201) {
            callback(JSON.parse(self.http.responseText),null)
        }else{
            callback(null,'Error: ' + self.http.status);
        }
    }
    self.http.send(JSON.stringify(data));
}

easyHttp.prototype.put = function(url,data,callback){
    let self = this;
    self.http.open("PUT",url,true);
    self.http.setRequestHeader('Content-type', 'application/json');
    self.http.onload = function(){
        if (self.http.status == 200 || self.http.status == 201) {
            callback(JSON.parse(self.http.responseText),null)
        }else{
            callback(null,'Error: ' + self.http.status);
        }
    }
    self.http.send(JSON.stringify(data));
}


easyHttp.prototype.delete = function(url,callback){
    let self = this;
    self.http.open("DELETE",url,true);
    self.http.onload = function(){
        if (self.http.status == 200 || self.http.status == 201) {
            callback("RECORD IS DELETED",null)
        }else{
            callback(null,'Error: ' + self.http.status);
        }
    }
    self.http.send();
}