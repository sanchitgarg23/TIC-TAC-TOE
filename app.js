let boxes= document.querySelectorAll(".box")  //we took .box class
let resetButtom=document.querySelector(".button")  // we took .button class
let newgameBtn=document.querySelector("#new_button")
let mseContainer=document.querySelector(".message_container")
let msg=document.querySelector("#msg")
// we will check whether turn is X or O
let turnO=true;  //playerX or playerO
// let gameOver = false;//track whether game is over

const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];
let count=0
const noWinner=()=>{
    if (count===9){
        // we will check count9 as no 3 O will be equal or no 3 xc will be equal
        msg.innerText="It is a draw :( so sad";
        mseContainer.classList.remove("hide");
    }
}
const resetGame=()=>{
    turnO=true;
    count=0
    enableBoxes();
    mseContainer.classList.add("hide")

}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        
        if (turnO===true){//playerO
            box.innerText="O";
            turnO=false;
            count++
            box.disabled=true;
            
        }else{// playerX
            box.innerText="X";
            turnO=true;
            count++
            box.disabled=true
            
        }
        checkWinner()
        noWinner();
       
    })
    //  inner Text is to Get the inner text of an element:
    // addEventListener is  to have a click event to document
    // disable help not to change item
});

const disableBoxes=()=>{
    // so that at top winner comes
    for (let box of boxes){
        box.disabled=true
    }
}
const enableBoxes=()=>{
    // we made this so that after reset everything thing should be disable
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulation ,Winner is ${winner}`;
    mseContainer.classList.remove("hide")
    disableBoxes();
    // to remove the hide from class list
    
}
const checkWinner=()=>{
    for (let pattern of winPattern){
        let position1=boxes[pattern[0]].innerText
        let position2=boxes[pattern[1]].innerText
        let position3=boxes[pattern[2]].innerText
        if (position1!="" && position2!="" && position3!="" ){
            if (position1==position2 && position2==position3 ){
                showWinner(position1);
                
            }

        }

    }

}
newgameBtn.addEventListener("click",resetGame);
resetButtom.addEventListener("click",resetGame);





 


