const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");

function add(){
    if(inputBox.value=='')
      alert("You must write a todo list ");
    else{

        let li=document.createElement('li');
        li.innerHTML =inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
inputBox.value="";
saveData();
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){ 
        e.target.parentElement.remove();
        saveData();
    }
},false);
// after refresh todo list remain previous list 
function  saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showlist(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showlist();