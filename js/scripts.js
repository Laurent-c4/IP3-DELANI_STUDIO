$(document).ready(function() {

//USER INTERFACE LOGIC

// Toggle function for 'What We Do' section
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

//Hover Effect for Portfolio section
  $("#img_1").hover(function() {
    $(this).fadeTo("slow", 0.5);
    $("#project_1").fadeTo("slow", 1);
  }, function() {
    $(this).fadeTo("slow", 1);
    $("#project_1").fadeTo("slow", 0);
  });
  $("#img_2").hover(function() {
    $(this).fadeTo("slow", 0.5);
    $("#project_2").fadeTo("slow", 1);
  }, function() {
    $(this).fadeTo("slow", 1);
    $("#project_2").fadeTo("slow", 0);
  });
  $("#img_3").hover(function() {
    $(this).fadeTo("slow", 0.5);
    $("#project_3").fadeTo("slow", 1);
  }, function() {
    $(this).fadeTo("slow", 1);
    $("#project_3").fadeTo("slow", 0);
  });
  $("#img_4").hover(function() {
    $(this).fadeTo("slow", 0.5);
    $("#project_4").fadeTo("slow", 1);
  }, function() {
    $(this).fadeTo("slow", 1);
    $("#project_4").fadeTo("slow", 0);
  });
  $("#img_5").hover(function() {
    $(this).fadeTo("slow", 0.5);
    $("#project_5").fadeTo("slow", 1);
  }, function() {
    $(this).fadeTo("slow", 1);
    $("#project_5").fadeTo("slow", 0);
  });
  $("#img_6").hover(function() {
    $(this).fadeTo("slow", 0.5);
    $("#project_6").fadeTo("slow", 1);
  }, function() {
    $(this).fadeTo("slow", 1);
    $("#project_6").fadeTo("slow", 0);
  });
  $("#img_7").hover(function() {
    $(this).fadeTo("slow", 0.5);
    $("#project_7").fadeTo("slow", 1);
  }, function() {
    $(this).fadeTo("slow", 1);
    $("#project_7").fadeTo("slow", 0);
  });
  $("#img_8").hover(function() {
    $(this).fadeTo("slow", 0.5);
    $("#project_8").fadeTo("slow", 1);
  }, function() {
    $(this).fadeTo("slow", 1);
    $("#project_8").fadeTo("slow", 0);
  });
});
