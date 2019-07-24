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
			filter: 'invert(33%) sepia(79%) saturate(52%) hue-rotate(90deg) brightness(101%) contrast(139%)'
		},
		{
			name: 'schwarz',
			filter: 'invert(40%) sepia(10%) saturate(63%) hue-rotate(9deg) brightness(100%) contrast(211%)'
		},
		{
			name: 'dunkelstblau',
			filter: 'invert(17%) sepia(74%) saturate(1000%) hue-rotate(202deg) brightness(32%) contrast(63%)'
		},
		{
			name: 'bordeaux',
			filter: 'invert(56%) sepia(100%) saturate(991%) hue-rotate(312deg) brightness(51%) contrast(100%)'
		},
		{
			name: 'okker',
			filter: 'invert(57%) sepia(100%) saturate(200%) hue-rotate(332deg) brightness(100%) contrast(200%)'
		},
		{
			name: 'olivgrün',
			filter: 'invert(32%) sepia(1000%) saturate(133%) hue-rotate(32deg) brightness(80%) contrast(80%)'
		},
		{
			name: 'braun',
			filter: 'invert(33%) sepia(100%) saturate(63%) hue-rotate(327deg) brightness(89%) contrast(150%)'
		},
		{
			name: 'denim',
			filter: 'invert(60%) sepia(50%) saturate(400%) hue-rotate(178deg) brightness(35%) contrast(92%)'
		},
		{
			name: 'sand',
			filter: 'invert(100%) sepia(100%) saturate(700%) hue-rotate(319deg) brightness(100%) contrast(80%)'
		},
		{
			name: 'petrol',
			filter: 'invert(36%) sepia(100%) saturate(67%) hue-rotate(133deg) brightness(100%) contrast(200%)'
		},
		{
			name: 'anthrazit',
			filter: 'invert(40%) sepia(10%) saturate(62%) hue-rotate(181deg) brightness(100%) contrast(150%)'
		},
		{
			name: 'mittelgrau',
			filter: 'invert(40%) sepia(10%) saturate(63%) hue-rotate(9deg) brightness(100%) contrast(211%)'
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
