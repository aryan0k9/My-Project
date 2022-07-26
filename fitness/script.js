const navslide = () =>{
    const nav_three_line = document.querySelector('.nav_three_line');
    const nav = document.querySelector('.nav_element_ul');

    nav_three_line.addEventListener('click',() =>{
            nav_three_line.classList.toggle('active');
            nav.classList.toggle('active');
        }
    );
}
navslide();
