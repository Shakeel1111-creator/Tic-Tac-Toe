var boxes=document.querySelectorAll(".box");
var rstbtn=document.querySelector("#reset");
var turno=true;
var msg=document.querySelector(".msg");
var msgContainer=document.querySelector(".msg-container");
var newBtn=document.querySelector("#new-btn");
const reset = () => {
    turno=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
const patterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log('box ws clicked');
        if(turno){
            box.innerText="O";
            turno=false;
        }else{
            box.innerText="X";
            turno=true;
        }
        box.disabled=true;
        checkwinner();
    });
});
const disableBoxes = () => {
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const checkwinner=() => {
    for(let pattern of patterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1 !="" && pos2 !="" && pos3 !=""){
            if(pos1===pos2 && pos2===pos3){
                console.log('winner',pos1);
                ShowWinner(pos2);
            };
        };
    };
};

const ShowWinner = (wnr) => {
    msg.innerText="congratulations winner is "+wnr;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
newBtn.addEventListener("click",reset);
rstbtn.addEventListener("click",reset);
