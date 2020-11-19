let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
  fetchToys()
});

function fetchToys(){
  return fetch("http://localhost:3000/toys")
    .then (response => response.json())
    // .then (response => console.log(response.toys))
    .then (response => addToys(response))
}

function addToys(array){
  let coll = document.getElementById("toy-collection")
  for(let i = 0; i< array.length; i++){
    let newDiv = document.createElement("div")
    newDiv.setAttribute("class", "card")
    addToyInfo(newDiv, array[i])
    coll.appendChild(newDiv)
  }
}

function addToyInfo(div, toy){
  let h2 = document.createElement("h2")
  h2.innerText = toy.name
  let img = document.createElement("img")
  img.setAttribute("src", toy.image)
  img.setAttribute("class", "toy-avatar")
  let p = document.createElement("p")
  p.innerText = toy.likes
  let button = document.createElement("button")
  button.setAttribute("class", "like-btn")
  button.innerText = "Like"
  div.appendChild(h2)
  div.appendChild(img)
  div.appendChild(p)
  div.appendChild(button)
}