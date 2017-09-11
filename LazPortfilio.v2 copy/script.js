$('#html-logo').click(function(){
    $('#html-progress').toggle();
});

$('#css-logo').click(function(){
    $('#css-progress').toggle();
});

$('#js-logo').click(function(){
    $('#js-progress').toggle();
});

$('#jquery-logo').click(function(){
    $('#jquery-progress').toggle();
});

$('#motivation').click(function(){
    $('#motivation-progress').toggle();
});

  $(document).ready(function(){
    $('.carousel').carousel({
      interval: 4000
    })
  }); 

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}