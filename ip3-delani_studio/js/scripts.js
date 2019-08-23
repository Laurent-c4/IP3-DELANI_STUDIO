$(document).ready(function() {
  $("#design_icon").click(function() {
    $("#design_icon").toggle();
    $("#design_description").toggle();
  });
  $("#design_description").click(function() {
    $("#design_icon").toggle();
    $("#design_description").toggle();
  });
  $("#development_icon").click(function() {
    $("#development_icon").toggle();
    $("#development_description").toggle();
  });
  $("#development_description").click(function() {
    $("#development_icon").toggle();
    $("#development_description").toggle();
  });
  $("#product_icon").click(function() {
    $("#product_icon").toggle();
    $("#product_description").toggle();
  });
  $("#product_description").click(function() {
    $("#product_icon").toggle();
    $("#product_description").toggle();
  });

});
