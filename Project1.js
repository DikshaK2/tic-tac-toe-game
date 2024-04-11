let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newButton = document.querySelector("#newBtn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");

let turn0 = true; //playerX, playerY

const winPatterns = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
           box.innerText ="x";
           box.style.color = "red";
           turn0 =false;
        }else{
            box.innerText = "o";
            box.style.color = "black";
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();
    })
    
})

let disableBoxes = () =>{
    for(let box of boxes ){
        box.disabled= true;
    }
}

let enableBoxes = () =>{
    for(let box of boxes ){
        box.disabled= false;
        box.innerText = "";
    }
}

let resetGame=()=>{
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}


let showWinner=(winner)=>{
    msg.innerText = `congratulations,winner is ${winner}`
    msg.style.fontSize = "8vmin";
    msgContainer.classList.remove("hide");
    disableBoxes();
}

let checkWinner = ()=>{
    for(let pattern of winPatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);
        /*console.log( boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,
        boxes[pattern[2]].innerText);*/
        let pos1 = boxes[pattern[0]].innerText
        let pos2 = boxes[pattern[1]].innerText
        let pos3 = boxes[pattern[2]].innerText

        if(pos2 !=="" && pos2 !=="" && pos3 !==""){
            if(pos1===pos2 && pos2===pos3){
                showWinner(pos1);

            }
        }
    }
}

newButton.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);