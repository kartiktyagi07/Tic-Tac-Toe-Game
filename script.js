let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".btn");
let turnO=false;
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
const winPatt=[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 5, 8],
    [6, 7, 8]
];
const resetgame = () => {
    turnO=false;
    btnEnable(); 
    msgContainer.classList.add("hide");
}
boxes.forEach((box) => {
    box.addEventListener("click" , () => {
        if(!turnO){
            box.innerText="O";
            turnO=true;
        }else{
            box.innerText="X";
            turnO=false;
        }
        box.disabled=true;
        winner();
    });
});
const btnDisable = () => {
    for(let x of boxes){
        x.disabled=true;
    }
};
const btnEnable = () => {
    for(let y of boxes){
        y.disabled=false;
        y.innerText="";
    }
};
const winnerfunction = (winner) => {
    msg.innerText=`Hurray!! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    btnDisable(); 
};
const winner= () => {
    for(let pattern of winPatt){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val===pos2Val && pos1Val==pos3Val){
                winnerfunction(pos1Val);
            }
        }
    }
};
newGameBtn.addEventListener("click", resetgame);
resetBtn.addEventListener("click", resetgame);

