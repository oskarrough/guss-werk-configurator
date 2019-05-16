const hyper = window.hyperHTML;

export class Configurator extends HTMLElement {

    constructor() {
        super();
        this.html = hyper(this);
        this.state = {};
        this.render();
    }

    updateProduct(event) {
        const feature = event.target.classList[1];
        const value = event.target.value;
        const target = this.querySelector(`.Product-${feature}-img`);
        target.src = `${this.endpoint}${feature}/${value}.png`;
    }

    showDescription(event) {
        const feature = event.target.classList[1];
        const descriptionElement = this.querySelector(".ActiveFeature-description");
        descriptionElement.innerHTML = this.data[feature].description;
    }

    render() {
        this.html`
            <div class="Config">
                <div class="Menus">
                    ${Object.keys(this.data).map(feature => {
                        return hyper()`
                            <p
                                class="${`MenuTitle ${feature}`}"
                                onmouseover=${this.showDescription.bind(this)}
                            >
                                ${feature}
                            </p>
                            <select
                                class="${`Menu ${feature}`}"
                                onchange=${this.updateProduct.bind(this)}
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
                    ${Object.keys(this.data).map(feature => {
                        return hyper()`
                            <div class="${`Product-${feature}`}">
                                    <img
                                        class="${`Product-${feature}-img`}"
                                        src="${`${this.endpoint}${feature}/${this.data[feature].options[0]}.png`}"
                                        alt="an image"
                                    >
                            </div>
                        `;
                    })}

                </div>
                <div class="ActiveFeature">
                    <p class="ActiveFeature-description">${this.data["hat"].description}</p>
                </div>
            </div>
        `;
    }
}