let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turn = document.querySelector("#turn");

// logic to track player turn
// player 1
let turn0 = true;
turn.innerText = "Player 1";
document.querySelector(".container").style.backgroundColor = "#AC316A";
const winPattern = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6 ]
]

boxes.forEach((box=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turn0){
            box.innerText="O";
            box.style.color = "#67BCC9";
            turn0 = false
            turn.innerText = "Player 2 "
            document.querySelector(".container").style.backgroundColor = "#8D5C87";
            
        }else{
            turn.innerText = "Player 1";
            box.innerText="X";
            box.style.color = "#A22426"
            turn0 = true
            document.querySelector(".container").style.backgroundColor = "#AC316A";
        }
        box.disabled = true;
        
        // check winner
        checkWinner();
    })
}))
const disabledBoxes = ()=>{
    for(box of boxes){
        box.disabled = true;
    }
}
const enabledBoxes = ()=>{
    for(box of boxes){
        box.disabled =false;
        box.innerText = "";
    }
}
const showWinner = (winner)=>{
    msg.innerText = `Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}
const checkWinner = ()=>{
    for(pattern of winPattern){
        let position1 = boxes[pattern[0]].innerText;
        let position2 = boxes[pattern[1]].innerText;
        let position3 = boxes[pattern[2]].innerText;

        if(position1!="" && position2!="" && position3!=""){
            if(position1===position2 && position2 === position3){
                if(position1==="O"){

                    showWinner("Player 1");
                }else{
                    showWinner("Player 2");

                }
                // console.log("Winner");
                // alert("winner");
            }
        }
    }
}

const resetGame = ()=>{
    
    turn0 = true;
    turn.innerText = "Player 1";
    document.querySelector(".container").style.backgroundColor = "#AC316A";
    enabledBoxes();
    msgContainer.classList.add("hide");
}

newGameBtn.addEventListener("click",resetGame);

resetBtn.addEventListener("click",resetGame);