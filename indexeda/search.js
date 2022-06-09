const searchBtn = document.querySelector('.search-mobile');
const searchform = document.querySelector('.search-form');

searchBtn.addEventListener('click',() => {
    if(!searchBtn.classList.contains('search-close')){
        searchform.style.display='block';
        searchBtn.classList.add('search-close');
    } else{
        searchform.style.display='none';
        searchBtn.classList.remove('search-close');
    }
    
})
    
