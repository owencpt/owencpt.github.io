document.getElementById('show-all').addEventListener('click', function() {
    var sandwich = document.getElementById("sandwich");
    var acai = document.getElementById("acai");
    var smoothie = document.getElementById("smoothie");
    var soup = document.getElementById("soup");

    if (sandwich.style.display === "none") {
        sandwich.style.display = "inherit";
    } 

    if (acai.style.display === "none") {
        acai.style.display = "inherit";
    } 

    if (smoothie.style.display === "none") {
        smoothie.style.display = "inherit";
    } 

    if (soup.style.display === "none") {
        soup.style.display = "inherit";
    } 

});

document.getElementById('vegetarian').addEventListener('click', function() {
    var soup = document.getElementById("soup");
    var sandwich = document.getElementById("sandwich");
    var acai = document.getElementById("acai");
    var smoothie = document.getElementById("smoothie");

    soup.style.display = "none"


    if (sandwich.style.display === "none") {
        sandwich.style.display = "inherit"
    } 

    if (acai.style.display === "none") {
        acai.style.display = "inherit"
    } 

    if (smoothie.style.display === "none") {
        smoothie.style.display = "inherit"
    } 
});


document.getElementById('vegan').addEventListener('click', function() {
    var sandwich = document.getElementById("sandwich");
    var acai = document.getElementById("acai");
    var soup = document.getElementById("soup");
    var smoothie = document.getElementById("smoothie");


    sandwich.style.display = "none";
    acai.style.display = "none";
    soup.style.display = "none";

    if (smoothie.style.display === "none") {
        smoothie.style.display = "inherit"
    } 


});


document.getElementById('dairy-free').addEventListener('click', function() {
    var sandwich = document.getElementById("sandwich");
    var acai = document.getElementById("acai");
    var soup = document.getElementById("soup");
    var smoothie = document.getElementById("smoothie");


    sandwich.style.display = "none";
    acai.style.display = "none";
    smoothie.style.display = "none";

    if (soup.style.display === "none") {
        soup.style.display = "inherit"
    } 

});