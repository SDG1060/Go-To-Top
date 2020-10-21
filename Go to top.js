var back_to_top = document.querySelector('.back_to_top');
window.addEventListener('scroll', function (e) {
    var MaxScroll = window.innerHeight;
    var MinScroll = (window.scrollY + MaxScroll - 100);
    if (MinScroll >= MaxScroll) {
        back_to_top.classList.add('back_to_top_Activated');
    } else { 
        back_to_top.classList.remove('back_to_top_Activated');
    }
});