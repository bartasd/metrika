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

import { Menu } from "./genMenuItems.js";

const m_rows = ["Overview", "Product", "Order", "Analitics", "Store", "Customer", "Transactions", "Campaign"];
const m_fonts = ["cubes", "cube", "shopping-bag", "pie-chart", "shopping-cart", "users", "credit-card-alt", "bullhorn" ];
const menius = new Menu('#menu', m_rows, m_fonts);

const p_rows = ["Settings", "Help"];
const p_fonts = ["tasks", "info-circle" ];
const preferences = new Menu('#preferences', p_rows, p_fonts);
