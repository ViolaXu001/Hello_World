ldocument.getElementById("Hello_World").addEventListener("click", function() {
    const age = document.getElementById("age").value;

    fetch("/getMealPlan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ age })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("meal-plan-output").innerHTML =
            Object.keys(data.mealPlan).map(day => `<p><strong>${day}:</strong> ${data.mealPlan[day]}</p>`).join("");
    })
    .catch(error => console.error("Error:", error));
});

document.getElementById("generate-shopping-list").addEventListener("click", function() {
    fetch("/getShoppingList", {
        method: "POST",
        headers: { "Content-Type": "application/json" }
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("shopping-list-output").innerHTML =
            data.shoppingList.map(item => `<p>${item}</p>`).join("");
    })
    .catch(error => console.error("Error:", error));
});
