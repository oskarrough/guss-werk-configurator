const hyper = window.hyperHTML;

export class Configurator extends HTMLElement {

    constructor() {
        super();
        this.html = hyper(this);
        this.updateState = this.updateState.bind(this);
        this.state = {};
        this.state.featureDescription = "";
        this.state.selectedOptions = {};
        Object.keys(this.data).forEach(feature => {
            this.state.selectedOptions[feature] = "";
        })
        this.render();
    }

    updateState(event, property) {
        const feature = event.target.classList[1];

        if (property === "description") {
            this.state.featureDescription = this.data[feature].description; 
        }
        else{
            const value = event.target.value;
            this.state.selectedOptions[feature] = value;  
        }
        this.render();
    }

    render() {
        this.html`
            <div class="Config">
                <div class="Menus">
                    ${Object.keys(this.data).map(feature => {
                        return hyper()`
                            <p
                                class="${`MenuTitle ${feature}`}"
                                onmouseover=${(event) => this.updateState(event,"description")}
                            >
                                ${feature}
                            </p>
                            <select
                                class="${`Menu ${feature}`}"
                                onchange=${(event) => this.updateState(event,"option")}
                            >
                                ${this.data[feature].options.map(option => {
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
                    })}
                </div>
                <div class="Product">
                    ${Object.keys(this.state.selectedOptions).filter(option => {
                        return this.state.selectedOptions[option] !== "";
                    })
                    .map(option => {
                        return hyper()`
                            <div class="${`Product-${option}`}">
                                    <img
                                        class="${`Product-${option}-img`}"
                                        src="${`${this.endpoint}${option}/${this.state.selectedOptions[option]}.png`}"
                                        alt="an image"
                                    >
                            </div>
                        `;
                    })}
                </div>
                <div class="ActiveFeature">
                    ${this.state.featureDescription}
                </div>
            </div>
        `;
    }
}