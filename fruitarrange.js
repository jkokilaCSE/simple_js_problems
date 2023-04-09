let fruit=["🍎","🍊","🍎","🍎","🍊"]
let appleShelf=document.getElementById("apple-shelf")
let orangeShelf=document.getElementById("orange-shelf")

//create a function that puts the apples  onto the  appleShelf and the oranges in the orangeShelf.Use a forloop,
//conditional statement ,and the textContent property .
function sortFruit(){
    for(let i=0;i<fruit.lenth;i++){
        if(fruit[i]==="🍎"){
            appleShelf.textContent+="🍎"
        }
        else{
            orangeShelf.textContent+="🍊"
        }
    }
}
sortFruit()