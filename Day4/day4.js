console.log("Hello World");
console.warn("warning");
console.error("error");
console.table([{name:"Alice",age:"20"},{name:"Bob",age:"21"}])

eval("let a=5;console.log(\"Hello World\");console.log(a);");
 
let x=3.14;
console.log(x);

let obj = {name:"John"};
let str = JSON.stringify(obj);
console.log(str);
let back=JSON.parse(str);
console.log(back);

localStorage.setItem("username","Siva");
console.log(localStorage.getItem("username"))

sessionStorage.setItem("firstname","John");
sessionStorage.setItem("age","20");
console.log(sessionStorage.getItem("firstname"));

let promise=new Promise((resolve)=>{
    let isReady = true;
    setTimeout(()=>{resolve("hello")},10000);
});
promise.then(res=>console.log(res)).catch(err=>console.log(err));

function outer(){
    let name="JS"
    return function inner(){
        console.log(name);
    }
}

let dom=document.getElementById("DOM");
let body = document.querySelector("div");

dom.style.color="red";
dom.innerText="Hello World";

let newElement=document.createElement("h1");
newElement.innerText="john";
dom.appendChild(newElement);
setTimeout(()=>{
    dom.removeChild(newElement);},1000);


let obj2=document.getElementById("DOM");
obj2.addEventListener("click",()=>{
    let obj1=document.getElementById("head");
    console.log(obj1);
    obj1.innerText="clicked";
});