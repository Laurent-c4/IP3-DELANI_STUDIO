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
  $("#col-1").hover(function() {
    $("#img_1").fadeTo("slow", 0.3);
    $("#project_1").fadeTo("slow", 1);
  }, function() {
    $("#img_1").fadeTo("slow", 1);
    $("#project_1").fadeTo("slow", 0);
  });
  $("#col-2").hover(function() {
    $("#img_2").fadeTo("slow", 0.3);
    $("#project_2").fadeTo("slow", 1);
  }, function() {
    $("#img_2").fadeTo("slow", 1);
    $("#project_2").fadeTo("slow", 0);
  });
  $("#col-3").hover(function() {
    $("#img_3").fadeTo("slow", 0.3);
    $("#project_3").fadeTo("slow", 1);
  }, function() {
    $("#img_3").fadeTo("slow", 1);
    $("#project_3").fadeTo("slow", 0);
  });
  $("#col-4").hover(function() {
    $("#img_4").fadeTo("slow", 0.3);
    $("#project_4").fadeTo("slow", 1);
  }, function() {
    $("#img_4").fadeTo("slow", 1);
    $("#project_4").fadeTo("slow", 0);
  });
  $("#col-5").hover(function() {
    $("#img_5").fadeTo("slow", 0.3);
    $("#project_5").fadeTo("slow", 1);
  }, function() {
    $("#img_5").fadeTo("slow", 1);
    $("#project_5").fadeTo("slow", 0);
  });
  $("#col-6").hover(function() {
    $("#img_6").fadeTo("slow", 0.3);
    $("#project_6").fadeTo("slow", 1);
  }, function() {
    $("#img_6").fadeTo("slow", 1);
    $("#project_6").fadeTo("slow", 0);
  });
  $("#col-7").hover(function() {
    $("#img_7").fadeTo("slow", 0.3);
    $("#project_7").fadeTo("slow", 1);
  }, function() {
    $("#img_7").fadeTo("slow", 1);
    $("#project_7").fadeTo("slow", 0);
  });
  $("#col-8").hover(function() {
    $("#img_8").fadeTo("slow", 0.3);
    $("#project_8").fadeTo("slow", 1);
  }, function() {
    $("#img_8").fadeTo("slow", 1);
    $("#project_8").fadeTo("slow", 0);
  });

  //Collection of user input and Feedback to user
  $("#contact").submit(function(event){
    event.preventDefault();
    var fields=["name","email","message"];
    var input=[];
    fields.forEach(function (field) {
      input.push($("#"+field).val());
    });
    alert("Thank You "+input[0]+" for reaching out to us. We have received your message");
    $("#contact")[0].reset();
  });
});
