const hyper = window.hyperHTML;

export class Configurator extends HTMLElement {

    constructor() {
        super();
        this.html = hyper(this);
        this.state = {};
        this.render();
    }

    render() {
        const path = "http://localhost:3000/assets/";
        this.html`
            <div class="Config">
                <div class="Menus">
                    ${Object.keys(this.data).map(feature => {
                        return hyper()`
                            <p class="MenuTitle">${this.data[feature].title}</p>
                            <select class="Menu">
                                ${this.data[feature].options.map(option => {
                                    return hyper()`
                                        <option class="Item" value=${option}>${option}</option>
                                    `;
                                })}
                            <select>
                        `;
                    })}
                </div>
                <div class="Product">
                    <div class="Product-element"><img
                                                    src="${`${path}hat/${this.data["0"].options[0]}.png`}"
                                                    alt="image"
                                                >
                    </div>
                    <div class="Product-element"><img
                                                    src="${`${path}pants/${this.data["0"].options[0]}.png`}"
                                                    alt="image"
                                                >
                    </div>
                    <div class="Product-element"><img
                                                    src="${`${path}shirt/${this.data["0"].options[0]}.png`}"
                                                    alt="image"
                                                >
                    </div>
                </div>
                <div class="FeatureDescription">
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