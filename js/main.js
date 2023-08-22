const barramenu = document.querySelectorAll('.menu');

  barramenu.forEach(function(item){
    item.addEventListener('click',function(e){
    e.target.classList.toggle('menu-modificado');
})
  })