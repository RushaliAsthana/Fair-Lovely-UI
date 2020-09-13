window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop >20 || document.documentElement.scrollTop > 20) {
    document.getElementById("top").style.display = "block";
  } else {
    document.getElementById("top")  .style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

$(document).ready(function(){
  
  $("#navbarDropdownMenuLink").click(function(){
    $("#firstdropdown").slideToggle();
    $("#seconddropdown").slideUp();
    $("#thirddropdown").slideUp();
    $("#fourthdropdown").slideUp();
  });
  

  $("#navbarDropdownMenuLink1").click(function(){
    $("#seconddropdown").slideToggle();
    $("#firstdropdown").slideUp();
    $("#thirddropdown").slideUp();
    $("#fourthdropdown").slideUp();
  });
  $("#navbarDropdownMenuLink2").click(function(){
    $("#thirddropdown").slideToggle();
    $("#firstdropdown").slideUp();
    $("#seconddropdown").slideUp();
    $("#fourthdropdown").slideUp();
  });
  $("#navbarDropdownMenuLink3").click(function(){
    $("#fourthdropdown").slideToggle();
    $("#firstdropdown").slideUp();
    $("#seconddropdown").slideUp();
    $("#thirddropdown").slideUp();
  });

  $(".navigation").mouseleave(function(){
    $("#seconddropdown").slideUp();
    $("#firstdropdown").slideUp();
    $("#thirddropdown").slideUp();
    $("#fourthdropdown").slideUp();
  });
  $("#user").click(function(){
    $("#seconddropdown").slideUp();
    $("#firstdropdown").slideUp();
    $("#thirddropdown").slideUp();
    $("#fourthdropdown").slideUp();
  });
});

$(document).ready(function () {
 // $("#sidebar").mCustomScrollbar({
 //     theme: "minimal"
 // });

 $('#dismiss, .overlay').on('click', function () {
     $('#sidebar').removeClass('active');
     $('.overlay').removeClass('active');
 });

 $('#sidebarCollapse').on('click', function () {
     $('#sidebar').addClass('active');
     $('.overlay').addClass('active');
     $('.collapse.in').toggleClass('in');
     $('a[aria-expanded=true]').attr('aria-expanded', 'false');
 });
});
