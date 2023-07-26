
const add = document.querySelector("#add"),
    minus = document.querySelector("#minus"),
    num = document.querySelector("#num");
let a = " ";

add.addEventListener("click", ()=>{
    if(a>0){
        a++;
        num.innerText = a;
    }

    if(a<=0){
        a++;
        num.innerText = a;
    }
});

minus.addEventListener("click", ()=>{
    if(a<0){
        a--;
        num.innerText = a;
    }

    if(a>=0){
        a--;
        num.innerText = a;
    }
})
