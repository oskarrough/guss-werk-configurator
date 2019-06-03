const hyper = window.hyperHTML;

function getMenu(configurator, feature, renderFct) {

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
                ${feature.options.map(option => {
                    return hyper()`
                        <option
                            class="Menu-list-item"
                            value=${option}
                            selected=${option === selectValue}
                        >
                            ${option}
                        </option>
                    `;
                })}
            <select>
        </div>
    `;
}

function getProductItem(configurator, feature) {

    let select = configurator.shadowRoot.querySelector("." + feature.id + " > select");
    let option = select ? select.value : feature.options[0];
    let formattedOption = option.includes(" ") ? option.replace(/ /g, "-") : option;
    let source = `${feature.url}${formattedOption}${feature.format}`;
    return hyper()`
        <div class="${`ProductItem ${feature.id}`}">
                    <img
                        class="${`Product-${feature.id}-img`}"
                        src= ${formattedOption == "" ? "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" : source}
                        alt=${formattedOption}
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
                    ${this.model.map(feature => { return getMenu(this, feature, this.render); })}
                    <div class="BtnBox">
                        <button class="BtnBox-button" type="submit">Submit ${this.product}</button>
                    </div>
                </form>
                <div class="Product">
                    ${this.model.map(feature => { return getProductItem(this, feature); })}
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