let newElement  = document.createElement("div")
newElement.classList.add("jcs")
let cardElement  = document.createElement("div")
cardElement.classList.add("card");
cardElement.style.width = "18rem";
let cardBody = document.createElement("div")
cardBody.classList.add("card-body")
let p = document.createElement('p')
p.classList.add("card-text")
let i = document.createElement("i")
i.classList.add("bi")
i.classList.add("bi-apple")
let h5 = document.createElement('h5')
h5.classList.add("card-title")
h5.textContent= "Accessiblity Friendly"
let h6 = document.createElement('h6')
h6.classList.add("card-subtitle")
h5.classList.add("mb-2")
h5.classList.add("text-body-secondary")
h6.textContent= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, corrupti?"

p.appendChild(i)
cardBody.appendChild(p)
cardBody.appendChild(h5)
cardBody.appendChild(h6)
cardElement.appendChild(cardBody)
newElement.appendChild(cardElement)
document.body.appendChild(newElement)