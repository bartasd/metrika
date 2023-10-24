const drop_menu = document.getElementById('down');
let droped = false;

drop_menu.addEventListener('click', function onClick() {
    droped = !droped;
    if(droped)
        drop_menu.classList.add('flipH');
    else
        drop_menu.classList.remove('flipH');
});