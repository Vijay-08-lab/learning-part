const view1 = document.getElementById("view1")
console.log(view1);
const view2 = document.querySelector("#view2")
console.log(view2);
view1.style.display ='flex';
view2.style.display = 'none';
const nview = document.getElementsByClassName("view")
console.log(nview)
const gview = document.querySelectorAll(".view")
console.log(gview)
const divs = view1.querySelectorAll("div")
console.log(divs)
const sameview =view1.getElementsByTagName("div")
console.log(sameview)
const evendivs = view1.querySelectorAll("div:nth-of-type(2n)")
console.log(evendivs);
evendivs[1].style.backgroundColor = "purple";
for (let i =0; i<evendivs.length;i++){
    evendivs[i].style.width = "150px";
    evendivs[i].style.backgroundColor = "green";
}
const navText = document.querySelector("nav h1")
console.log(navText)
navText.textContent = "!Hello World";
navText.innerHTML = "<div>inserted</div>"
console.log(evendivs[0])
console.log(evendivs[0].parentElement)
view1.style.display = 'none';
view2.style.display = 'flex';
console.log(view2.lastChild);

const creatediv =(parent,iter) => {
    const newdiv = document.createElement("div")
    newdiv.textContent = iter;
    newdiv.style.height = '100px';
    newdiv.style.width = '100px';
    newdiv.style.backgroundColor = 'yellow';
    newdiv.style.color = 'black';
    newdiv.style.display = 'flex';
    newdiv.style.alignItems = 'center';
    newdiv.style.justifyContent = 'center';
    newdiv.style.margin = '10px';
    parent.append(newdiv)
}
for(let i=1; i<11;i++){
creatediv(view2,i);
}

// Event Listeners //
//.addEventListener("",function,usercapture)
 view1.classList.toggle() // toggle is used to change the data or style of element.
 