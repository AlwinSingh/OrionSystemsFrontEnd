$(document).ready(function(){
    // Retrieves the ID #header and #footer respectively from the pages and loads header.html and footer.html into those ids. Basically loading the header and footer through their individual
    // html files. No need to repeatedly cut and paste the header / footer.
    $("#header").load("header.html");
    $("#footer").load("footer.html");
});