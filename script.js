// Javascript for opening and closing the question box;
window.addEventListener('scroll', function () {
    const nav = document.getElementById('mainNav');
    const links = document.getElementsByClassName('sp');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
        links.classList.add('scrolled2')
    } else {
        nav.classList.remove('scrolled');
        links.classList.remove('scrolled2');
    }
});

 


document.querySelectorAll('.questionbox').forEach(box=>{
    box.addEventListener('click',function(){
        const questionDiv = box.querySelector('h3.q');
        const ansDiv = box.querySelector('p.ans');
        const icon = box.querySelector('i.icon');
        ansDiv.style.display = ansDiv.style.display==='none'?'block':'none';

        icon.classList.toggle('fa-minus');
        icon.classList.toggle('fa-plus');

    });
})