
function openTab(evt, tabName) {
    var contents = document.getElementsByClassName("tab-content");
    for (var i = 0; i < contents.length; i++) {
      contents[i].classList.remove("active");
    }
  
    var buttons = document.getElementsByClassName("tab-btn");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("active");
    }
  
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
  }
  
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Message sent successfully!');
    this.reset();
  });