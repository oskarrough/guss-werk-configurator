export default {
	name: "LSA Basis",
	imageFolder: '/assets/lsa-basis/',

	colors: [
		{
			name: 'anthrazit',
			filter: 'none'
		},
		{
			name: 'grün',
			filter: 'invert(33%) sepia(50%) saturate(1000%) hue-rotate(115deg) brightness(140%) contrast(100%)'
		},
		{
			name: 'braun',
			filter: 'invert(33%) sepia(50%) saturate(1000%) hue-rotate(24deg) brightness(100%) contrast(100%)'
		},
		{
			name: 'hellblau',
			filter: 'invert(33%) sepia(50%) saturate(1000%) hue-rotate(24deg) brightness(100%) contrast(100%)'
		},
		{
			name: 'rot',
			filter: 'invert(33%) sepia(50%) saturate(1000%) hue-rotate(24deg) brightness(100%) contrast(100%)'
		},
		{
			name: 'senfgelb',
			filter: 'invert(50%) sepia(100%) saturate(1000%) hue-rotate(400deg) brightness(150%) contrast(100%)'
		},
		{
			name: 'braun',
			filter: 'invert(33%) sepia(50%) saturate(1000%) hue-rotate(372deg) brightness(30%) contrast(150%)'
		},
		{
			name: 'hellblau',
			filter: 'invert(33%) sepia(50%) saturate(1000%) hue-rotate(24deg) brightness(100%) contrast(100%)'
		},
		{
			name: 'rot',
			filter: 'invert(33%) sepia(50%) saturate(1000%) hue-rotate(24deg) brightness(100%) contrast(100%)'
		},
		{
			name: 'senfgelb',
			filter: 'invert(33%) sepia(50%) saturate(1000%) hue-rotate(24deg) brightness(100%) contrast(100%)'
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
