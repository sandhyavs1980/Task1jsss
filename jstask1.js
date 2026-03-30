let animalName = document.getElementById("animalName");

animalName.addEventListener("mouseover", function() {
    animalName.textContent = "Big Cat 🐯";
});

animalName.addEventListener("mouseout", function() {
    animalName.textContent = "Tiger";
});
setTimeout(function(){

alert("Welcome To Animal Page"); },2000);

