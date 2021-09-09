
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