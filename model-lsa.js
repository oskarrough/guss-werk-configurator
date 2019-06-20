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
				url: 'neck-',
				format: '.png',
				options: [
					'gk-01-braun',
					'gk-01-cognac',
					'gk-01-schwarz',
					'gk-02-braun',
					'gk-02-schwarz',
					'gt-03-grau-melange',
					'gt-03-rot'
				]
			}
		],

		[
			{
				id: 'brust',
				title: 'Brust',
				url: 'brust-',
				format: '.png',
				options: ['', 'gross mitte', 'klein links', 'klein rechts']
			}
		],

		[
			{
				id: 'TouchonLinks',
				title: 'Touchonhalter links',
				url: 'touchon-links-',
				format: '.png',
				options: ['', 'touchon']
			},
			{
				id: 'TouchonRechts',
				title: 'Touchonhalter rechts',
				url: 'touchon-rechts-',
				format: '.png',
				options: ['', 'touchon']
			}
		],

		[
			{
				id: 'huefteLinks',
				title: 'Hüftetasche links',
				url: 'huefte-links-',
				format: '.png',
				options: ['', 'klein', 'gross']
			},
			{
				id: 'huefteRechts',
				title: 'Hüftetasche rechts',
				url: 'huefte-rechts-',
				format: '.png',
				options: ['', 'klein', 'gross']
			}
		],

		[
			{
				id: 'front',
				title: 'Front',
				url: 'base-',
				format: '.jpg',
				options: ['lang', 'kurz']
			}
		]
	]
}
