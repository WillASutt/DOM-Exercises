// Step 1:
document.addEventListener("DOMContentLoaded", function () 
{

    // Step 2:
    const containerBox = document.querySelector("#box-container");
    const newBoxBtn = document.querySelector("#new-box-button");
    const colorForm = document.querySelector("#color-form");
    const colorInput = document.querySelector("#color-input");

    // Step 3:
    let boxColor = null;
    let boxIdCounter = 0;

    // Step 5:
    function addNewBox () {
        const box = document.createElement("div");
        box.setAttribute("data-box-id", boxIdCounter.toString());
        boxIdCounter.textContent = `Box ${boxIdCounter}`;
        box.className = "box";
        box.style.backgroundColor = boxColor;
        boxContainer.appendChild(box);

        boxIdCounter++;
    }

    // Step 4:
    colorForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const newColor = colorInput.value;
        const boxes = document.querySelectorAll(".box");

        for (let box of boxes) {
            box.style.backgroundColor = newColor;
        }

        colorInput.value = "";
        boxColor = newColor;
        // reset color input element's value and stored the box color in box color variable.
    });

    // Step 6:
    newBoxBtn.addEventListener("click", function(e) {
        addNewBox();
    });

    // Step 7:
    document.addEventListener("dblclick", function(e) {
        if (e.target.classList.contains("box")) {
            e.target.remove();
        }
    });

    // Step 8:
    document.addEventListener("mouseover", function(e) {
        if (e.target.classList.conatains("box")) {
            console.log(e.pageX, e.pageY);
        }
    });

    // Step 9:
    document.addEventListener("mouseout", function(e) {
        if (e.target.classList.contains("box")) {
            const boxId = e.target.getAttribute("data-box-id");
            e.target.textContent = boxId;
        }
    });

    // Step 10:
    document.addEventListener("keydown", function(e) {
        if (e.target === colorInput) {
            return;
        }
        else if (e.key.toLowerCase() === "n") {
                addNewBox();
            }
    });

});