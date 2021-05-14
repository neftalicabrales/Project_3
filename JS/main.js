let options = {
    root: null,
    threshold: 0.25,
  }

  function intersectionHandler(entries, observer) {
entries.forEach(entry => {

    if (entry.isIntersecting) {
        entry.target.classList.add("active"); 

        let color = entry.target.dataset.color;
       document.body.style.backgroundColor = color;
    } else {
        entry.target.classList.remove("active");
       
    }
  });
  }

  let observer = new IntersectionObserver(intersectionHandler, options);

  let images =  document.querySelectorAll("img");

  images.forEach((image) => {
observer.observe(image);
 });

 var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
   
    this.classList.toggle("active");

    
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}