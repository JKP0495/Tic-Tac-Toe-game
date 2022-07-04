let turn= "X"
let boxes=document.getElementsByClassName('box')
let X=document.getElementById('X')
let O=document.getElementById('O')
let ytx=document.getElementById('ytx')
let yto=document.getElementById('yto')
let win=0;

const changeturn = ()=>{
    if(turn=="X"){
        turn="O";
        X.style.backgroundColor= "rgb(181, 127, 218)";
        O.style.backgroundColor= "rgb(245, 245, 104)"
        yto.textContent="Your Turn";
        ytx.textContent="";
    }
    else{
        turn="X";
        O.style.backgroundColor= "rgb(181, 127, 218)";
        X.style.backgroundColor= "rgb(245, 245, 104)";
        ytx.textContent="Your Turn";
        yto.textContent="";
    }
}

const checkwin = ()=>{
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e => {
        if(boxes[e[0]]===boxes[e[1]] && boxes[e[0]]===boxes[e[2]] && boxes[e[0]]!==""){
            win=1;
            if(turn=="X"){

            }
            else{

            }
        }
    });
}

Array.from(boxes).forEach(element => {
    element.addEventListener('click',()=>{
        element.textContent= turn;
        checkwin();
        if(win===0){
            changeturn();
        }
    })
});

