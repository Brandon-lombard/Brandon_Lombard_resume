// index.html

// burger button Click Event


$("#navBtn").click(function () {

   if ($("#flexContainer").css("display") === 'none') {

      $("#flexContainer").css("display", "flex");
   } else {
      $("#flexContainer").css("display", "none");
   }

});


// Landing page

// Text

$(document).ready(function () {

   $("#headerTextCon").animate({

      opacity: "1"

   }, 2000);

   $("#backgroundCon").animate({

      opacity: "1"

   }, 2000)

});


// Additional styles

$("#aboutMeh2").css("position", "relative").css("right", "130%");

$(".h5text").css("position", "relative").css("right", "130%");

$("#infoCol1").css("position", "relative").css("right", "130%");

$("#infoCol2").css("position", "relative").css("right", "130%");

$("#infoCol3").css("position", "relative").css("right", "130%");

$("#workHistory").css("opacity", "0")

$(".contactCol").css("position", "relative").css("right", "130%")

// OnScroll animation

$(document).on("scroll", function () {

   // About us section

   $(".h5text").animate({

      left: "0"

   }, 1000);

   $("#aboutMeh2").animate({

      left: "0"

   }, 2000)

   $("#infoCol1").animate({

      right: "0"

   }, 2500)

   $("#infoCol2").animate({

      right: "0"

   }, 2700);

   $("#infoCol3").animate({

      right: "0"

   }, 2900);

   // Work History


   $("#workHistory").animate({

      opacity: "1"

   }, 2500)

   //   Contact section


   $(".contactCol").animate({

      left: "0"

   }, 1000);

})