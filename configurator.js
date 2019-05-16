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
                    ${Object.keys(this.data).map(feature => {
                        return hyper()`
                            <div class="Product-element">
                                    <img 
                                        src="${`${path}${this.data[feature].title}/${this.data[feature].options[0]}.png`}"
                                        alt="an image"
                                    >
                            </div>
                        `;
                    })}

                </div>
                <div class="FeatureDescription">
                    <p>${this.data["0"].description}</p>
                </div>
            </div>
        `;
    }
}