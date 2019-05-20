const hyper = window.hyperHTML;

function createMenuElement(feature, updateState) {
    return hyper()`
        <p
            class="${`MenuTitle ${feature}`}"
            onmouseover=${(event) => updateState(event,"description")}
        >
            ${feature}
        </p>
        <select
            class="${`Menu ${feature}`}"
            onchange=${(event) => updateState(event,"option")}
        >
            ${feature.options.map(option => {
                return hyper()`
                    <option
                        class="Item"
                        value=${option}
                    >
                        ${option}
                    </option>
                `;
            })}
        <select>
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
            this.state.featureDescription = this.state.model[feature].description; 
        }
        else{
            const value = event.target.value;
            this.state.selectedOptions[feature].option = value;  
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
                    ${Object.keys(this.model).map(feature => {
                        createMenuElement(this.model[feature], this.updateState);
                    })}
                </div>
                <div class="Product">
                    ${Object.keys(this.state.selectedOptions).map(option => {
                        //let endpoint = `${`${this.state.selectedOptions[option].endpoint} ${this.state.selectedOptions[option].value} ${this.state.selectedOptions[option].format}`}`
                        return hyper()`hello world
                        `;
                    })}
                </div>
                <div class="FeatureDescription">
                    ${this.state.featureDescription}
                </div>
            </div>
        `;
    }
}