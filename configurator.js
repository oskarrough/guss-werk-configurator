const hyper = window.hyperHTML;

export class Configurator extends HTMLElement {

    constructor() {
        super();
        this.html = hyper(this);
        this.state = {};
        this.render();
    }

    render() {
        this.html`
            <div class="Config">
                <div class="Config-menus">
                    ${Object.keys(this.data).map(feature => {
                        hyper()`
                            <h6 class="Config">${this.data[feature].title}</h6>
                        `
                    })}
                </div>
                <div class="Config-product">
                </div>
                <div class="Config-featureDescription">
                </div>
            </div>
        `;
    }
}



/*                        hyper()`
                            <select class="Config-menus-menu Menu">
                                ${this.data[feature].options.map(option => {
                                    hyper()`<option class="Config-menus-menu-value=${option}>${option}</option>`
                                })}
                            </select>
                            `;

                            hyper()`<h6 class="Config-menus-menu-title">${this.data[feature].title}</h6>`*/