
// Task 1:
const taskOneId = document.querySelector("#task1");
taskOneId.innerText = "Complete Task One."

// Task 2:
const taskTwoId = document.querySelector("#task2");
taskTwoId.innerHTML = "<button>Submit</button"

// Task 3:
const body = document.querySelector("body");
body.style.backgroundColor = "#232323"

// Task 4:
const items = document.querySelectorAll(".item");

for (let item of items) {
    item.style.border = "dotted";
}

// Task 5:
const link = document.querySelector("#task5");
link.setAttribute("href", "https://www.springboard.com/")

// Task 6:
const placeholder = document.querySelector("#task6[placeholder]");
placeholder.value = "DOM Master"


// Task 7:
const element7 = document.querySelector("#task7");
element7.classList.add("new-class")

// Task 8:
const newButton = document.createElement("button");
const element8 = document.querySelector("#task8");
newButton.innerText = "Push Me";
element8.append(newButton)

// Task 9:
const erased = document.querySelector("#task9");
erased.remove()



