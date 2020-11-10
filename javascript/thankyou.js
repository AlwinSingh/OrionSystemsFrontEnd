$(document).ready(function(){
    $("#searchBar").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#courierTable tr").filter(function() {
         // The toggle() method hides the row (display:none) that does not match the search.
         // toLowerCase() makes the search case insensitive
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
      
});
