addButton = document.getElementById("add");
removeButton = document.getElementById("remove");
list = document.getElementById("list");
shoppingList = [];

displayShoppingList = () => {
    message = ``;
    for (item of shoppingList) {
        message += `<li>${item}</li>`;
    }

    return message;
}

addButton.addEventListener("click", () => {
    newItem = prompt("Add item to the shopping list:");
    shoppingList.push(newItem);
    list.innerHTML = displayShoppingList();
});

removeButton.addEventListener("click", () => {
    itemToRemove = prompt("Name the item to remove from the shopping list:");
    idx = shoppingList.indexOf(itemToRemove);
    if (idx >= 0) {
        shoppingList.splice(idx, 1);
    } else {
        alert("Sorry! Such item is not on the list.");
    }
    list.innerHTML = displayShoppingList();
});
