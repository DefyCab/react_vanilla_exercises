const incrementBtn = document.getElementById("increment-btn")
const countDisplay = document.getElementById("count-display")

//Document API:s above can now be modified.

let currentCount = 1

//Piece of State. State is different value or data that are going to affect the user interface"
//The state is the representation in our js what should be displayed to user
//UI state or API state

incrementBtn.addEventListener('click', () => {
    currentCount++
//Whe need to update the DOM
countDisplay.innerText = currentCount
})