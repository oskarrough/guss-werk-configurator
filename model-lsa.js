export default {
	name: "LSA Basis",
	imageFolder: '/assets/lsa-basis/',

	colors: [
		{
			name: 'anthrazit',
			filter: 'none'
		},
		{
			name: 'green',
			filter: 'invert(52%) sepia(4%) saturate(2776%) hue-rotate(18deg) brightness(186%) contrast(130%)'
		},
		{
			name: 'brown',
			filter: 'invert(30%) sepia(164%) saturate(219%) hue-rotate(689deg) brightness(208%) contrast(140%)'
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
				title: 'Brust',
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
