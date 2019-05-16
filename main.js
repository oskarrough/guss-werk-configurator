import {Configurator} from './configurator.js'
import {model} from './model.js'

class Controller {

    // bind model to configurator's properties configurator and define element
    constructor() {
        document.querySelector("clothes-configurator").data = model;
        customElements.define("clothes-configurator", Configurator);
    }
}

window.onload = new Controller();



