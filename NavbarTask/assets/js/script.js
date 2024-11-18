const openIcon = document.querySelector('.sidebar-toggle i');
const closeIcon = document.querySelector('.close-icon i');
const sidebar = document.querySelector('.sidebar');

openIcon.addEventListener('click', function() {
    sidebar.classList.add('open'); 
});

closeIcon.addEventListener('click', function() {
    sidebar.classList.remove('open'); 
});
