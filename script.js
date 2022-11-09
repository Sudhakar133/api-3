let div=document.createElement("div");
div.setAttribute("class", "main1");

let formgroup=document.createElement("div");
formgroup.setAttribute("class", "form-group");

let input=document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("class", "form-control");
input.setAttribute("id", "main");
input.setAttribute("placeholder", "Paste Your URL");
input.style.width="420px";

let button=document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-primary");
button.innerHTML="Search";
button.style.marginLeft="160px";
button.style.marginTop="20px";
button.addEventListener("click", foo);

let result=document.createElement("div");
result.classList.add("active", "res");

formgroup.append(input,button);
div.append(formgroup);
document.body.append(div,result);

async function foo(){
let name=document.getElementById("main").value;
console.log(name);
let res=await fetch(`https://thakdees.dev.fast.sheridanc.on.ca/1pt/addURL.php?url=${name}`);
let res1= await res.json();
console.log(res1.short);

var div1=document.createElement("div");
div1.innerHTML=`<h3>Shorten <b>URL</b></h3><br>
<p>Copy The URL => https://1pt.co/${res1.short}</p>`;
result.append(div1);

}