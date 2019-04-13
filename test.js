fetch('http://127.0.0.1:8080/')
.then(function(response) {
 
    return response.json();
})
.then(function(myJson) {
  console.log(myJson);
});