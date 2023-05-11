// For find your Test Scrolling
const scrollButton = document.getElementById('scroll-button');

scrollButton.addEventListener('click', function(event) {
  event.preventDefault();

  const section = document.querySelector(this.getAttribute('href'));
  const sectionOffsetTop = section.offsetTop;

  window.scrollTo({
    top: sectionOffsetTop,
    behavior: 'smooth'
  });
});
// emailjs
function SendMail(){
  var params = {
    from_name: document.getElementById("fullName").value,
    email_id: document.getElementById("email_id").value,
    message: document.getElementById("message").value
  }
  emailjs.send("service_g797tst", "template_4qnecmr", params).then(function(res) {
    alert("Success!" + res.status);
  })
}
const hamburger = document.querySelector('.hamburgerMenu');   
const navBar = document.querySelector('#links-container');
const menuClose = document.querySelector('.closeMobileNav');
menuClose.addEventListener('click',()=>{
  navBar.classList.remove('hidden');
  navBar.classList.add('hide');

});
hamburger.addEventListener('click', ()=>{
 navBar.classList.add('hidden');
 navBar.classList.remove('hide');
 console.log("clicked")
});

// scroll to top btn 
var scrollToTopBtn = document.getElementById("scroll-to-top-btn");


  window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  };

  
  function scrollToTop() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
  }

  scrollToTopBtn.addEventListener("click", scrollToTop);