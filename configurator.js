const hyper = window.hyperHTML

function slugify(string) {
	return string
		.replace(/ /g, '-')
		.trim()
		.toLowerCase()
}

function findSelectedValueFor(configurator, feature) {
	let select = configurator.shadowRoot.querySelector(`.${feature.id} > select`)
	return select ? select.value : feature.options[0]
}

function getMenu(configurator, featureArr, renderFct) {
	let multipleFeaturesFlag = ''
	if (featureArr.length > 1) multipleFeaturesFlag = 'MenuWrapper--multiple'

	return hyper(featureArr)`
		<div class=${`MenuWrapper ${multipleFeaturesFlag}`}>
			${featureArr.map(feature => {
				// get selected value for selected option
				let selectValue = findSelectedValueFor(configurator, feature)
				return hyper(feature)`
					<label class="${`Menu ${feature.id}`}">
						${feature.title}
						<select name=${feature.id} onchange=${renderFct} >
							${feature.options.map(option => {
								return hyper()`
									<option
										value=${option}
										selected=${option === selectValue}
									>${option}</option>
								`
							})}
						</select>
					</label>
				`
			})}
		</div>
	`
}

function getProductItem(configurator, baseURL, featureArr) {
	return featureArr.map(feature => {
		let option = slugify(findSelectedValueFor(configurator, feature))
		let source = `${baseURL}${feature.url}${option}${feature.format}`
		let src = option === '' ? 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D' : source
		return hyper(feature, ':option')`
			<img class="${`ProductItem ${feature.id}`}" src= ${src} alt=${option} >
		`
	})
}

function ColorButton(configurator, colorObject) {
	function changeColorMask(configurator, event) {
		event.preventDefault()

		const filter = event.currentTarget.dataset.filter
		const mask = configurator.shadowRoot.querySelector('.Mask')
		// first btn in the list
		const defaultBtn = configurator.shadowRoot.querySelector('.ColorButton') 
		
		// Update the mask with selected color.
		// mask.alt = colorObject.name
		// mask.title = colorObject.name
		configurator.model.selectedColor = colorObject
		configurator.render()

		if (event.currentTarget === defaultBtn) {
			mask.classList.remove('is-active')
			return false
		}
		mask.classList.add('is-active')
		mask.style.filter = filter
	}
	return hyper(colorObject)`
		<button
			class="ColorButton"
			data-filter=${colorObject.filter}
			onclick=${event => changeColorMask(configurator, event)}
		>
			<span class="ColorButton-circle">
				<span class="ColorButton-filter" style="${'filter: ' + colorObject.filter}"></span>
			</span>
			<span class="ColorButton-text">${colorObject.name}</span>
		</button>
	`
}

function serializeForm(form) {
	const formData = new FormData(form)
	let config = {}
	for (var pair of formData) {
		let name = pair[0];
		let value = pair[1];
		// console.log({name, value})
		if (value !== '') {
			config[name] = value
		}
	}
	return config
}

export class Configurator extends HTMLElement {
	constructor() {
		super()
		this.shadow = this.attachShadow({mode: 'open'})
		this.html = hyper(this.shadow)

		this.render = this.render.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.render()
		this.loadStyle()
	}

	set model(featuresObject) {
		this.model = featuresObject
	}

	handleSubmit(event) {
		event.preventDefault()

		// get current configuration 
		const config = serializeForm(event.target)
		// and color
		const color = this.shadowRoot.querySelector('.Mask').alt
		// config.name = this.model.name
		// config.color = color
		console.log({config})
		// alert(JSON.stringify(config))
		//
		// fetch(event.target.action, {
		// 	method: 'POST'
		// }).then(what => {
		// 	console.log(what)
		// }).catch(err => console.log(err))
		//
		//
		var action = event.target.action
		$.ajax({
			type: "POST",
			url: action,
			crossDomain: true,
			data: new FormData(event.target),
			dataType: "json",
			contentType: "multipart/form-data",
			processData: false,
			contentType: false,
			headers: {
				"Accept": "application/json"
			}
		}).done(function() {
			alert('success')
		}).fail(function() {
			alert('An error occurred please try again later.')
		})
	}

	render() {
		const selectedColor = this.model.selectedColor || this.model.colors[0]
		console.log(selectedColor, this.model)
		console.log('render')
		this.html`
			<div class="Config">
				<form action="https://getform.io/f/d629dd1e-dfc9-4e3b-9f5c-c1e626d2d53b" class="Menus" onsubmit=${this.handleSubmit}>
					<h1 class="Title">${this.model.name}</h1>

					<input class="HiddenInput" type="text" name="model" value=${this.model.name}>

					<div class="">
						${this.model.features.map(featureArr => getMenu(this, featureArr, this.render))}
					</div>

					<label class="HiddenInput">Farbe
						<input required type="text" name="color" value=${selectedColor.name}>
					</label>

					<div class="Menus-scroll">
						${this.model.colors.map(color => ColorButton(this, color))}
					</div>

					<p>
						<label>Email
						<input required type="email" name="email" placeholder="Your email">
						</label>
					</p>
					<p>
						<label>Anzahl
						<input type="number" name="amount" value="10" min="10">
						</label>
					</p>
					<p>
						<label>Ansprechpartner<br>
							<textarea name="comments"></textarea>
						</label>
					</p>

					<footer class="Menus-bottom">
						<p>Mindestbestellmenge 10 Stk/Konfiguration</p>
						<p>
							<button class="Button" type="submit">Anfragen</button>
						</p>
					</footer>
				</form>

				<div class="Product">
					<img 
						src="./assets/lsa-basis/maske-lang.png" class="ProductItem Mask" 
						style=${`filter: ${selectedColor.filter}`} 
						alt=${selectedColor.name}
						title=${selectedColor.name}>

					${this.model.features.map(featureArr => getProductItem(this, this.model.imageFolder, featureArr))}
				</div>
			</div>
		`
	}

	loadStyle() {
		const style = hyper()`<style>@import "./styling.css"</style>`
		this.shadowRoot.appendChild(style)
	}
}
