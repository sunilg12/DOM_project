let count=0;

const countDisplay=document.getElementById("h3");
const incrementBtn=document.getElementById("increment");
const decrementBtn=document.getElementById("decrement");
const clearBtn=document.getElementById("clear");

// create error message
const errorMsg=document.createElement("p");
errorMsg.style.color="red";
errorMsg.style.display="none";//hidden by default
errorMsg.textContent="Error: cannot go below 0";

document.querySelector(".headers").appendChild(errorMsg);


function updateUI(){
    countDisplay.innerHTML= `your current count is: <b>${count}</b>`;

    if(count === 0){
        clearBtn.style.display="none";
        errorMsg.style.display="Error: cannot go below 0";
    }else if(count > 0) {
        clearBtn.style.display="block";
    }else{
        errorMsg.style.display="none";
    }
}


incrementBtn.addEventListener("click",() =>{
count++;
errorMsg.style.display="none";
updateUI();
})

decrementBtn.addEventListener("click", ()=>{
    if(count > 0){
        count--;
    }else{
        errorMsg.style.display="block";
    }
    updateUI();
})

clearBtn.addEventListener("click", ()=>{
    count=0;
    updateUI();
})