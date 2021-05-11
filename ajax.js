

function getData() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if ( this.responseType === 4 && this.status === 200 ) {
            console.log(this.readyState);
            document.getElementById("output").innerText = JSON.stringify(this.responseText);
        }
    };
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    xhttp.send();
}