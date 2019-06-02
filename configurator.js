const hyper = window.hyperHTML;

function createMenuElement(feature, renderFct) {
    return hyper(feature)`
        <div class="${`Menu ${feature.id}`}">
            <h5
                    class="${`Menu-title`}"
                >
                    ${feature.title}
                </h5>
                <select
                    class="${`Menu-list`}"
                    onchange=${renderFct}
                >
                    ${feature["options"].map(option => {
                        return hyper()`
                            <option
                                class="Menu-list-item"
                                value=${option}
                            >
                                ${option}
                            </option>
                        `;
                    })}
                <select>
        </div>
    `;
}

function createProductOptionElement(feature) {

    let select = document.querySelector(feature.id); // Does not exist yet
    let source = `${feature.url}${select.value}${feature.format}`;
    return hyper()`
        <div class="${`ProductItem ${feature.id}`}">
                    <img
                        class="${`Product-${feature.id}-img`}"
                        src= ${source}
                        alt=${option}
                    >
        </div>
    `;
}

export class Configurator extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode:"open"});
        this.html = hyper(this.shadow);

        this.render();
        this.loadStyle();
    }

    set model(featuresObject) {
        this.model = featuresObject;
    }
  
    render() {
        this.html`
            <div class="Config">
                <div class="Menus">
                    <h1 class="Title">Design your custom ${this.product}</h1>
                    ${this.model.map(feature => { return createMenuElement(feature, this.render); })}
                </div>
                <div class="Product">
                    ${this.model.map(feature => { return createProductOptionElement(feature); })}
                </div>
            </div>
        `;
    }

    loadStyle() {
        const style = hyper()`
                <style>
                    @import "./styling.css"
                </style>
        `;
        this.shadowRoot.appendChild(style);
    }
}