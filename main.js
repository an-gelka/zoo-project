const btn = document.querySelectorAll(".btn");

btn.forEach(element => {
  // if (window.innerHeight <= 768) 
  if (document.documentElement.clientWidth <= 768) {
    element.classList.remove("btn-left");
    }
});

