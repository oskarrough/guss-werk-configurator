import { model, product } from './model.js'
import { Configurator } from './configurator.js';

const configurator = document.querySelector("clothes-configurator");
configurator.model = model;
configurator.product = product
customElements.define("clothes-configurator", Configurator);