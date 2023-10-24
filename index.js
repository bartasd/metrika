const drop_menu = document.getElementById('down');
let dropedM = false;

drop_menu.addEventListener('click', function onClick() {
    dropedM = !dropedM;
    if(dropedM)
        drop_menu.classList.add('flipH');
    else
        drop_menu.classList.remove('flipH');
});

const drop_panel = document.getElementById('down_panel');
let dropedP = false;

drop_panel.addEventListener('click', function onClick() {
    dropedP = !dropedP;
    if(dropedP)
        drop_panel.classList.add('flipH');
    else
        drop_panel.classList.remove('flipH');
});