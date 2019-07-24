export default {
	name: "LSA Basis",
	imageFolder: '/assets/lsa-basis/',

	colors: [
		{
			name: 'hellgrau',
			filter: 'none'
		},
		{
			name: 'dunkelgrün',
			filter: 'invert(36%) sepia(100%) saturate(67%) hue-rotate(90deg) brightness(100%) contrast(200%)'
		},
		{
			name: 'schwarz',
			filter: 'invert(40%) sepia(10%) saturate(63%) hue-rotate(9deg) brightness(100%) contrast(211%)'
		},
		{
			name: 'dunkelstblau',
			filter: 'invert(69%) sepia(100%) saturate(1000%) hue-rotate(188deg) brightness(100%) contrast(200%)'
		},
		{
			name: 'bordeaux',
			filter: 'invert(56%) sepia(100%) saturate(1000%) hue-rotate(312deg) brightness(100%) contrast(600%)'
		},
		{
			name: 'okker',
			filter: 'invert(61%) sepia(100%) saturate(200%) hue-rotate(354deg) brightness(100%) contrast(200%)'
		},
		{
			name: 'olivgrün',
			filter: 'invert(57%) sepia(100%) saturate(163%) hue-rotate(59deg) brightness(100%) contrast(200%)'
		},
		{
			name: 'braun',
			filter: 'invert(33%) sepia(100%) saturate(63%) hue-rotate(-10deg) brightness(100%) contrast(200%)'
		},
		{
			name: 'denim',
			filter: 'invert(69%) sepia(100%) saturate(1000%) hue-rotate(188deg) brightness(100%) contrast(200%)'
		},
		{
			name: 'sand',
			filter: 'invert(56%) sepia(100%) saturate(1000%) hue-rotate(312deg) brightness(100%) contrast(600%)'
		},
		{
			name: 'petrol',
			filter: 'invert(36%) sepia(100%) saturate(67%) hue-rotate(133deg) brightness(100%) contrast(200%)'
		},
		{
			name: 'anthrazit',
			filter: 'invert(56%) sepia(100%) saturate(1000%) hue-rotate(312deg) brightness(100%) contrast(600%)'
		},
		{
			name: 'mittelgrau',
			filter: 'invert(61%) sepia(100%) saturate(200%) hue-rotate(354deg) brightness(100%) contrast(200%)'
		}
	],

	features: [
		[
			{
				id: 'accessoires',
				title: 'Gurte',
				url: 'gurt-',
				format: '.png',
				options: [
					'GL02 braun',
					'GL02 cognac',
					'GL02 schwarz',
					'GK01 braun',
					'GK01 cognac',
					'GK01 schwarz',
					'GK02 braun',
					'GK02 cognac',
					'GK02 schwarz',
					'GT03 grau-melange',
					'GT03 rot',
					'GT03 schwarz'
				]
			}
		],

		[
			{
				id: 'brust',
				title: 'Brusttasche',
				url: 'brust-',
				format: '.png',
				options: ['', 'groß mitte', 'klein links', 'klein rechts']
			}
		],

		[
			{
				id: 'TouchonLinks',
				title: 'Touchonhalter links',
				url: 'touchon-links-',
				format: '.png',
				options: ['', 'Touchon']
			},
			{
				id: 'TouchonRechts',
				title: 'Touchonhalter rechts',
				url: 'touchon-rechts-',
				format: '.png',
				options: ['', 'Touchon']
			}
		],

		[
			{
				id: 'huefteLinks',
				title: 'Hüftetasche links',
				url: 'huefte-links-',
				format: '.png',
				options: ['', 'klein', 'groß']
			},
			{
				id: 'huefteRechts',
				title: 'Hüftetasche rechts',
				url: 'huefte-rechts-',
				format: '.png',
				options: ['', 'klein', 'groß']
			}
		],

		[
			{
				id: 'front',
				title: 'Front',
				url: 'lsa-',
				format: '.jpg',
				options: ['lang', 'kurz']
			}
		]
	]
}
