const hyper = window.hyperHTML;

function slugify(string) {
    return string 
        .replace(/ /g, "-")
        .trim()
        .toLowerCase()
}

function findSelectedValueFor(configurator, feature) {
    let select = configurator.shadowRoot.querySelector(`.${feature.id} > select`);
    return select ? select.value : feature.options[0];
}

function getMenu(configurator, featureArr, renderFct) {

    let multipleFeaturesFlag = "";
    if (featureArr.length > 1) multipleFeaturesFlag = "Flex";

    return hyper(featureArr)`
    <div class=${`MenuWrapper ${multipleFeaturesFlag}`}>
      ${featureArr.map(feature => {
        // get selected value for selected option
        let selectValue = findSelectedValueFor(configurator, feature);
        return hyper(feature)`
          <div class="${`Menu ${feature.id}`}">
            <label class="Menu-title" for="Menu-list" >
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
            </select>
          </div>  
        `;
      })}
    </div>
  `;
}

function getProductItem(configurator, baseURL, featureArr) {

    return featureArr.map(feature => {
        
        let option = findSelectedValueFor(configurator, feature);
        option = slugify(option);
        let source = `${baseURL}${feature.url}${option}${feature.format}`;
        let src = option === "" ? "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" : source;
        return hyper(feature, ':option')`
          <div class="${`ProductItem ${feature.id}`}">
            <img
              class="${`Product-${feature.id}-img`}"
              src= ${src}
              alt=${option}
            >
          </div>
        `;

    })
}

function getColorMenu(colorsArr) {
  return hyper(colorsArr)` 
    <div class="ColorMenu">
      ${colorsArr.map( color => {
        return hyper()`
          <div class="ColorMenu-ItemWrapper">
            <button class="ColorMenu-ItemWrapper-circle" style=${`filter: ${color.filter} `} ></button>
            <p class="ColorMenu-ItemWrapper-text">${color.name}</p>
          </div>
        `;
      })}
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
                    <h1 class="Title">Design your custom ${this.model.product}</h1>
                    ${getColorMenu(this.model.colors)}
                    ${this.model.features.map(featureArr => getMenu(this, featureArr, this.render))}
                    <div class="BtnBox">
                        <button class="BtnBox-button" type="submit">Submit ${this.product}</button>
                    </div>
                </form>
                <div class="Product">
                    <img src="./assets/lsa-basis/base-mask-lang.png" class="Mask ProductItem">
                    ${this.model.features.map(featureArr => getProductItem(this, this.model.imageFolder, featureArr))}
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

