const hyper = window.hyperHTML;
const configurator = document.querySelector("clothes-configurator");

function getMenu(feature, renderFct) {

    // get selected value for next select's first option
    const menuClassName = "." + feature.id + " > select";
    let select = configurator.shadowRoot.querySelector(menuClassName);
    let selectValue =  select ? select.value : feature.options[0];

    return hyper(feature)`
        <div class="${`Menu ${feature.id}`}">
            <label
                class="Menu-title"
                for="Menu-list"
            >
                ${feature.title}
            </label>
            <select
                class="Menu-list"
                onchange=${renderFct}
            >
                <option value=${selectValue}>${selectValue}</option>
                ${feature.options.filter( option => { if (selectValue) return option != selectValue; }) // avoid duplicating first option 
                .map(option => {
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

function getProductItem(feature) {

    let select = configurator.shadowRoot.querySelector("." + feature.id + " > select");
    let option = select ? select.value : feature.options[0];
    let source = `${feature.url}${option}${feature.format}`;
    return hyper()`
        <div class="${`ProductItem ${feature.id}`}">
                    <img
                        class="${`Product-${feature.id}-img`}"
                        src= ${option == "none" ? "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" : source}
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

        this.render = this.render.bind(this);
        this.render();
        this.loadStyle();
    }

    set model(featuresObject) {
        this.model = featuresObject;
    }
  
    render() {
        this.html`
            <div class="Config">
                <form class="Menus">
                    <h1 class="Title">Design your custom ${this.product}</h1>
                    ${this.model.map(feature => { return getMenu(feature, this.render); })}
                    <div class="BtnBox">
                        <button class="BtnBox-button" type="submit">Submit your ${this.product}</button>
                    </div>
                </form>
                <div class="Product">
                    ${this.model.map(feature => { return getProductItem(feature); })}
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