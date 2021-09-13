
//Dropdown code start

function hoverDropdown() {
    let x = document.getElementById("nav-head-hover");
    x.addEventListener("mouseenter", function(){
        document.getElementById("hoverDropdown-nav").style.display = "block";
    });

    x.addEventListener("mouseleave", function(){
        document.getElementById("hoverDropdown-nav").style.display = "none";
    });
    
}

function dropdown() {
    let x = document.getElementById("dropdown-nav");
    if (x.style.display == "none") {
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }
}

//Dropdown code ends here

//tab section code starts here

$(document).ready(function(){

    $(".tabs-list li a").click(function(e){
       e.preventDefault();
    });
  
    $(".tabs-list li").click(function(){
       var tabid = $(this).find("a").attr("href");
       $(".tabs-list li,.tabs .tab").removeClass("active");
       $(".tab").hide();
       $(tabid).show();
       $(this).addClass("active");
  
    });

    $(".accordion h3").click(function() {
        var check = $(this).next().attr("class");
        if (check == "active") {
           $(this).next().removeClass("active");
           $(this).next().slideUp();
           $(this).find(".sign").html("&#43");
        }
        else {
           $(this).next().slideDown();
           $(this).next().addClass("active");
           $(this).find(".sign").html("&#8722");
        }  
    });
  
});

//tab section code ends here
