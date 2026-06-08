// let btn= document.querySelector("#btn");
// let fileinp= document.querySelector("#fileinp");

// btn.addEventListener("click" , function(){
//     fileinp.click();
// });

// fileinp.addEventListener("change", function(dets){
//    btn.textContent= dets.target.files[0].name;
// })

// let refresh= document.querySelector("#refresh");
// refresh.addEventListener("click" , function(){
//     location.reload();
// });







// let form = document.querySelector("form");
// let inputs = document.querySelectorAll("input");
// let main= document.querySelector("#main");

// form.addEventListener("submit", function (dets) {
//     dets.preventDefault();

//     let card = document.createElement("div");
//     card.classList.add("card");

//     let profile = document.createElement("div");
//     profile.classList.add("profile");


//     let img = document.createElement("img");
//     img.setAttribute("src", inputs[0].value);

// let h3= document.createElement("h3");
// h3.textContent= inputs[1].value;

// let h3n= document.createElement("h3");
// h3n.textContent= inputs[2].value;

// let p = document.createElement("p");
// p.textContent= inputs[3].value;


// profile.appendChild(img);
// card.appendChild(profile);
// card.appendChild(h3);
// card.appendChild(h3n);
// card.appendChild(p);



// main.appendChild(card);

// inputs.forEach(function(val){
// if(val.type !=="submit"){
//     val.value= "";
// };

// });



// });


let newn = document.querySelector("#new");

// newn.addEventListener("mouseover", function(){
//     newn.style.backgroundColor= "yellow";
// });

// newn.addEventListener("mouseout", function(){
//     newn.style.backgroundColor= "red";
// });



newn.addEventListener("mousemove", function(dets){
    newn.style.left= dets.clientX +"px";
    newn.style.top= dets.clientY +"px";
});







