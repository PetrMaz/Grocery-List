document.querySelector("#btndelete").addEventListener("click", () => {
    document.querySelector("#grocery").textContent = "";
    //setting button to delete whole grocery div when click on the button
})

document.querySelector("#donedelete").addEventListener("click", () => {
    document.querySelector("#done").textContent = "";
    //setting button to delete whole done list div when click on the button

})

document.querySelector("#item").addEventListener("keydown", (event) => {
    if(event.key == "Enter")
    addItem();
    //adding function addItem when we hit enter after filling the input.
});

function addItem()  {
    const groceryItem = document.createElement("h2");
    groceryItem.textContent = " -" + document.querySelector("#item").value;
    //creating new element h2 to our grocery list

    groceryItem.addEventListener("click", () => {
        const broughtItem = document.createElement("h3");
        broughtItem.innerText =  groceryItem.innerText;
        document.querySelector("#done").appendChild(broughtItem);
        groceryItem.style.display="none";

        //adding new function when we click on the h2 item -> transfering to our new brought list and disappear h2 element from grocery list when we click on the element
    })

    
    
    document.querySelector("#grocery").appendChild(groceryItem);
    document.querySelector("#item").value = "";   
    
    //appending new element to our grocery list and after we want to empty our input container.
    }

    
