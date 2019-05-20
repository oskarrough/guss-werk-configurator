const hyper = window.hyperHTML;

function createMenuElement(featureName, featureObject, updateState) {
    return hyper()`
        <div class="Menu">
            <p
                class="${`Menu-title ${featureName}`}"
                onmouseover=${(event) => updateState(event,"description")}
            >
                ${featureName}
            </p>
            <select
                class="${`Menu-list ${featureName}`}"
                onchange=${(event) => updateState(event,"value")}
            >
                ${featureObject.options.map(option => {
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

function createProductOptionElement(option, endpoint) {

    return hyper()`
        <div class="${`Product-${option}`}">
                    <img
                        class="${`Product-${option}-img`}"
                        src= ${endpoint}
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

        this.updateState = this.updateState.bind(this);
        this.state = {};
        this.state.featureDescription = "";
        this.state.selectedOptions = {};
        Object.keys(this.model).forEach(feature => {
            this.state.selectedOptions[feature] = {};
            this.state.selectedOptions[feature].endpoint = this.model[feature].url;
            this.state.selectedOptions[feature].value = "";
            this.state.selectedOptions[feature].format = this.model[feature].format;
        })
        this.render();
        this.loadStyle();
    }

    set model(featuresObject) {
        this.model = featuresObject;
    }

    updateState(event, property) {
        const feature = event.target.classList[1];

        if (property === "description") {
            this.state.featureDescription = this.model[feature].description; 
        }
        else{
            const value = event.target.value;
            this.state.selectedOptions[feature].value = value;  
        }
        this.render();
    }

    loadStyle() {
        const style = hyper()`
                <style>
                    @import "./styling.css"
                </style>
        `;
        this.shadowRoot.appendChild(style);
    }

    render() {
        this.html`
            <div class="Config">
                <div class="Menus">
                    ${Object.keys(this.model).map(featureName => {
                        return createMenuElement(featureName, this.model[featureName], this.updateState);
                    })}
                </div>
                <div class="Product">
                    ${Object.keys(this.state.selectedOptions).filter(option => {
                        return this.state.selectedOptions[option].value != "";
                    })
                    .map(option => {
                        let endpoint = `${this.state.selectedOptions[option].endpoint}${this.state.selectedOptions[option].value}${this.state.selectedOptions[option].format}`;
                        return createProductOptionElement(option, endpoint);
                    })}
                </div>
                <div class="FeatureDescription">
                    ${this.state.featureDescription}
                </div>
            </div>
        `;
    }
}