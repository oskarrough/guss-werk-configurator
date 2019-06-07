import Model from './model-lsa.js'
import { Configurator } from './configurator.js';

const configurator = document.querySelector("clothes-configurator");
configurator.model = Model;
customElements.define("clothes-configurator", Configurator);
