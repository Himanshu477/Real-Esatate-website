    function openNav() {
      document.getElementById("invisible").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
      document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }
    
    function closeNav() {
      document.getElementById("invisible").style.width = "0";
      document.getElementById("main").style.marginLeft= "0";
      document.body.style.backgroundColor = "white";
    }
    
    function myFunction(x) {
      if (x.matches) { // If media query matches
        closeNav()
      }
    }
    var x = window.matchMedia("(min-width: 576px)")
    myFunction(x) // Call listener function at run time
    x.addListener(myFunction) // Attach listener function on state changes
    
    function active_fun(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    }
    
    // Add active class to the current button (highlight it)
    var vis_dash = document.getElementById("visible");
    var vis_btns = vis_dash.getElementsByClassName("btn");
    for (var i = 0; i < vis_btns.length; i++) {
      vis_btns[i].addEventListener("click", active_fun);
    }
    