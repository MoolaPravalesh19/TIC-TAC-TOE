let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true; //playerX , playerO
const arr=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];//2-D ARRAY

const ResetGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turnO===true){//playerO
            box.innerText="O";
            turnO=false;
        }
        else{//playerX
           box.innerText="X";
           turnO=true;
        }
        box.disabled =true;
        checkWinner();
    })
});
const showWinner =(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner=() => {
   for(let pattern of arr){
      // console.log(pattern[0],pattern[1],pattern[2]);
      // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);
      // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
      let pos1Val=boxes[pattern[0]].innerText;
      let pos2Val=boxes[pattern[1]].innerText;
      let pos3Val=boxes[pattern[2]].innerText;

      if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
        if(pos1Val ===pos2Val && pos2Val === pos3Val){
            console.log("WINNER",pos1Val);
            showWinner(pos1Val);
        }
      }
   }
};

newGameBtn.addEventListener("click",ResetGame);
resetbtn.addEventListener("click",ResetGame);