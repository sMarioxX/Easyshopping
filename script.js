document.addEventListener('DOMContentLoaded',function(){
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  if(toggle && nav){
    toggle.addEventListener('click',()=> nav.classList.toggle('open'));
  }
  document.getElementById('year').textContent = new Date().getFullYear();
});
