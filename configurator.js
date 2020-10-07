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
		// Update the mask with selected color.
		configurator.model.selectedColor = colorObject
		configurator.render()
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

// Returns an object with all values from the form.
function serializeForm(form, removeEmpty) {
	const formData = new FormData(form)
	let config = {}
	for (var pair of formData) {
		let name = pair[0];
		let value = pair[1];
		if (removeEmpty && value === '') {
			// dont add empty values
		} else {
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

		// Get current configuration.
		const config = serializeForm(event.target)
		
		console.log('Sending form with ajax...')
		// Couldn't make this work with "formsubmit.com" so we use jQuery....
		// fetch(event.target.action, {
		// 	method: 'post',
		// 	body: config
		// }).then(() => {
		// 	alert('success')
		// }).catch(err => {
		// 	alert('did not work')
		// 	console.log(err)
		// })
		
		$.ajax({
			url: event.target.action,
			method: 'POST',
			data: config
		}).done(function() {
			alert('Thank you. We will get back to you soon.')
		}).fail(function() {
			alert('Error. Your request was NOT sent. Please try again or contact us on info@guss-werk.com')
		})
	}

	render() {
		// Get the length of the mask. Not so pretty....
		let maskLength = this.model ? findSelectedValueFor(this, this.model.features[this.model.features.length - 1][0]) : 'lang'
		const maskImageUrl = `./assets/lsa-basis/maske-${maskLength}.png`
		const selectedColor = this.model.selectedColor || this.model.colors[0]

		console.log('render', {selectedColor, model: this.model})

		this.html`
			<div class="Config">
				<form action="https://formsubmit.io/ajax/info@guss-werk.com" class="Menus" onsubmit=${this.handleSubmit}>
					<h1 class="Title">${this.model.name}</h1>

					<input class="HiddenInput" type="text" name="model" value=${this.model.name}>
					<input type="hidden" name="_subject" value="Anfrage von Konfigurator">
					<input type="hidden" name="_replyto">

					<div class="">
						${this.model.features.map(featureArr => getMenu(this, featureArr, this.render))}
					</div>

					<label class="HiddenInput">Farbe
						<input required type="text" name="color" value=${selectedColor.name}>
					</label>

					<div class="Menus-scroll">
						${this.model.colors.map(color => ColorButton(this, color))}
					</div>

					<p style="margin-top: 1em">
						<label>Anzahl <small>(Mindestbestellmenge 10 Stk)</small>
						<input type="number" name="amount" value="10" min="10">
						</label>
					</p>
					<p>
						<label>Ansprechpartner*in / Unternehmen<br>
							<textarea name="contact"></textarea>
						</label>
					</p>					
					<p>
						<label>Ihre E-Mail-Adresse
						<input required type="email" name="email">
						</label>
					</p>
					<p>
						<label>Ihre Telefonnummer für Rückfragen<br>
							<textarea name="phone"></textarea>
						</label>
					</p>					
					<p>
						<label>Ihre Nachricht an uns<br>
							<textarea name="comments"></textarea>
						</label>
					</p>

					<footer class="Menus-bottom">
						<p>
							<button class="Button" type="submit">Anfragen</button>
						</p>
					</footer>
				</form>

				<div class="Product">
					<img 
						src=${maskImageUrl} class="ProductItem Mask" 
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
