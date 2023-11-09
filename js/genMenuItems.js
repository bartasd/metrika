export class Menu {
    constructor(selector, rows, icons) {
        this.selector = selector;
        this.rows = rows;
        this.icons = icons;
        this.len = null;
        this.DOM = null;

        this.init();
    }

    init() {
        const err = this.updateDOMelement();
        if (typeof err === 'string') {
            return console.error(err);
        }
        this.len = this.testRowIconsLength();
        if(this.len === 'string')
            return console.error(err2);

        this.render();
    }

    updateDOMelement() {
        if (typeof this.selector !== 'string' || this.selector === '') {
            return 'Netinkamas selektorius';
        }
        this.DOM = document.querySelector(this.selector);
    }

    testRowIconsLength(){
        if(this.rows.length !== this.icons.length)
            return "Eilutėms trūksta iconų";
        else
            return this.rows.length;
    }

    render() {
        let HTML = '';
        HTML = `<p>${this.selector.slice(1)}</p>`;

        for (let i = 0; i < this.len; i++) {
            HTML += `
                <div>
                    <p class="fa fa-${this.icons[i]}"></p>
                    <p>${this.rows[i]}</p>
                </div>`;
        }

        this.DOM.innerHTML = HTML;
    }    
}