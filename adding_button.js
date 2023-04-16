const container=document.getElementById("container")
container.innerHTML="<button onclick='buy()'>BUY!</button>"


function buy(){
    container.innerHTML+="<p>Thank you for buying!</p>"
}