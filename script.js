console.log("welcome to tic tac toe");
let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";
let isgameover = false;


// function to change the turn 
//method 1
/*const changeTurn = ()=>{
    return turn === "X"? "0": "X"-->means if turn is X then return 0 (==="X"? "0") else return "X"(:"X")
}*/
//method 2
function changeTurn(){
    if(turn==="X"){
        return "O";
    }else {
        return "X";
    }
}

// function to check win 
const checkWin = ()=>{
   let boxtext = document.getElementsByClassName('boxText');
    let wins = [
        [0,1,2] ,
        [3,4,5] ,
        [6,7,8] ,
        [0,3,6] ,
        [1,4,7] ,
        [2,5,8] ,
        [0,4,8] , 
        [2,4,6] ,
    ]
    //boxtext element ka innerText element[0] ka equals to element[1] ka and element[1] ka equals to element[2] ka toh win hai nahi toh lun hai 

     wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isgameover = true;
            gameover.play();
            /*document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "20vw"; */
        } 
    })

 } 
 music.play();
 music.volume = 0.5;
// game logic 
//step 1 : selecting elements and adding event listener to them :
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector(".boxText");
    element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
        boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
        
           //not gameover => !gameover 
            if (!isgameover){
                document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
            } 
        }
     
    })
})

// adding on click listener to reset button 
reset.addEventListener('click',()=>{
        let boxtext = document.querySelectorAll(".boxText");
        Array.from(boxtext).forEach(element =>{
            element.innerText="";
        })
        turn = "X";
        isgameover=false;
        document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
        
})
