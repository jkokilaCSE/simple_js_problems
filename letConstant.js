//need to check the let and const and need to change the console.log statements to template literals

// let player ="koki"//should be const
// let opponent ="per"//should be const
// let game ="AmazingFighter"//should be const
// const points =0//should be let
// const hasWon =false//should be let....... so we will change the code below...let to const and const to let
const player ="koki"
const opponent ="per"
const game ="Amazing Fighter"
let points =0
let hasWon =false

//playing the game
points+=100
hasWon =true

//Announcing the winner
if(hasWon){
    // console.log(player+"got"+points+"points and won  the "+ game + "game!")
    console.log(`${player} got ${points} points and won  the  ${game} game!`)


}
else{
    // console.log("The winner is"+ opponent + "!"+player+"lost the game")
    console.log(`The winner is ${opponent}! ${player} lost the game`)

}

//Create a function that takes a single parameter,an array,
//and logs all the items of the array to the console.
//call the function while passing in myCourses as a argument

let myCourse =["Learn css Animations","UI Design Fundamentas","Intro to Clean code"]

function courses(arr){
    for(let i=0;i<arr.length;i++){
        console.log(myCourse[i])
    }

}
courses(myCourse)

//local storage concept:
//tasks---1.save a value to the local storage
//-------2.delete your code and refresh the page
//-------3.Fetch your value from local storage  and log it out
let arr1=["a","b"]
localStorage.setItem("arr1",arr1)
console.log(localStorage.getItem("arr1"))
localStorage.clear()

//practice for addEventListener:
let scoreBtn=document.getElementById("score")
let data=[
    {
        player:"Jane",
        score: 52
    },
    {
        player:"Mark",
        score:  41
    }
]
scoreBtn.addEventListener("click",function(){
    console.log(data[0].score)
})

//for loop and template strings:

function generateSentence(desc,arr){
    let baseString =`The ${arr.length} ${desc} are `
    const lastIndex = arr.length-1
    for(let i=0;i<arr.length;i++){
        if(i===lastIndex){
            baseString+=arr[i]
        }
        else{
            baseString+=arr[i]+", "
        }
    }
    return baseString
}

const sentence =generateSentence("highest mountains",["Mount Everest","k2"])
console.log(sentence)









