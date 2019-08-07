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
        <img class="${`ProductItem ${feature.id}`}" src= ${src} alt=${option} >
    `;
  })
}

function getColorElement(configurator, colorObject) {
  function changeColorMask(configurator, event){
    event.preventDefault();
    const filter = event.target.dataset.filter;
    const mask = configurator.shadowRoot.querySelector(".Mask");
    const defaultBtn = configurator.shadowRoot.querySelector(".ColorMenu-itemWrapper-button"); // first btn in the list

    if (event.target === defaultBtn) {
      mask.classList.remove("is-active");
      return false;
    }

    mask.classList.add("is-active");
    mask.style.filter = filter;

  }
  return hyper(colorObject)`
    <div class="ColorMenu-itemWrapper">
      <button class="ColorMenu-itemWrapper-button"
        data-filter=${colorObject.filter}
        onclick=${ (event) => changeColorMask(configurator,event)}
      >
      <span class="ColorMenu-buttonFilter" style="${'filter: ' + colorObject.filter}"></span>
      </button>
      <p class="ColorMenu-itemWrapper-text">${colorObject.name}</p>
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
      /*const colorsObjects = this.model.colors.filter(color => {
        return color.name !== 'default';
      })*/
      this.html`
        <div class="Config">
          <form class="Menus">
            <h1 class="Title">${this.model.name}</h1>
            ${this.model.features.map( featureArr => getMenu(this, featureArr, this.render ))}
            <div class="ColorMenu">
              ${this.model.colors.map( color => getColorElement( this, color ))}
            </div>
            <div style="display: none">
              <label>
                Email
                <input type="email" placeholder="Your email">
              </label>
              <label>
                Anzahl
                <input type="number" min="10">
              </label>
              <label>
                Ansprechpartner
                <textarea></textarea>
              </label>
            </div>
            <div class="BtnBox">
              <button class="BtnBox-button" type="submit">Submit ${this.product}</button>
            </div>
          </form>
          <div class="Product">
            <img src="./assets/lsa-basis/maske-lang.png" class="ProductItem Mask" style=${`filter: ${this.model.colors[0].filter}`} alt=${this.model.colors[0].name}>
            ${this.model.features.map(featureArr => getProductItem( this, this.model.imageFolder, featureArr ))}
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

