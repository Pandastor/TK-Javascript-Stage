const button = document.querySelector("#my-button")
const link = document.querySelector("#reset-link")

// write your code below:
button.addEventListener("click", () => {
  button.innerText = "Tu as cliqué !"
  button.disabled = true
  link.classList.remove("d-none")
})

link.addEventListener("click", () => {
  button.innerText = "Clique sur moi !"
  button.disabled = false
  link.classList.add("d-none")
}) 
