export default {
	name: "LSA Basis",
	imageFolder: '/assets/lsa-basis/',

	colors: [
		{
			name: 'BLAU, Twill 60%CO/40%PES, 240g/m',
			filter: 'invert(50%) sepia(100%) saturate(211%) hue-rotate(167deg) brightness(69%) contrast(196%)'
		},
		{
			name: 'hellgrau',
			filter: 'none'
		},
		{
			name: 'SCHWARZ, Canvas oder Twill 60%CO/40%PES, 320g/m',
			filter: 'invert(40%) sepia(10%) saturate(63%) hue-rotate(9deg) brightness(100%) contrast(211%)'
		},
		{
			name: 'dunkelstblau, Ripsmoleskin 100%CO KbA, 320g/m',
			filter: 'invert(17%) sepia(74%) saturate(1000%) hue-rotate(202deg) brightness(32%) contrast(63%)'
		},
		{
			name: 'taubenblau, Twill 100%CO KbA, 240g/m',
			filter: 'invert(95%) sepia(100%) saturate(700%) hue-rotate(174deg) brightness(100%) contrast(101%)'
		},
		{
			name: 'bordeaux, Canvas 40%CO/60%PES, 320g/m',
			filter: 'invert(56%) sepia(100%) saturate(991%) hue-rotate(312deg) brightness(51%) contrast(100%)'
		},
		{
			name: 'ocker, Twill 100%CO KbA, 280g/m',
			filter: 'invert(57%) sepia(100%) saturate(200%) hue-rotate(332deg) brightness(100%) contrast(200%)'
		},
		{
			name: 'olivgrün, Ripsmoleskin 100%CO KbA, 320g/m',
			filter: 'invert(32%) sepia(1000%) saturate(133%) hue-rotate(32deg) brightness(80%) contrast(80%)'
		},
		{
			name: 'braun, Twill 60%CO/40%PES, 240g/m',
			filter: 'invert(33%) sepia(100%) saturate(63%) hue-rotate(327deg) brightness(89%) contrast(125%)'
		},
		{
			name: 'denim, Raw Denim 100%CO KbA, 320g/m',
			filter: 'invert(60%) sepia(50%) saturate(400%) hue-rotate(178deg) brightness(35%) contrast(92%)'
		},
		{
			name: 'sand, Twill 100%CO KbA, 280g/m',
			filter: 'invert(100%) sepia(100%) saturate(700%) hue-rotate(319deg) brightness(100%) contrast(80%)'
		},
		{
			name: 'petrol, Twill 100%CO KbA, 280g/m',
			filter: 'invert(25%) sepia(100%) saturate(67%) hue-rotate(148deg) brightness(189%) contrast(160%)'
		},
		{
			name: 'anthrazit, Twill 60%CO/40%PES, 280g/m',
			filter: 'invert(40%) sepia(10%) saturate(62%) hue-rotate(181deg) brightness(105%) contrast(150%)'
		},
		{
			name: 'grafit, Twill 60%CO/40%PES, 240g/m',
			filter: 'invert(55%) sepia(10%) saturate(62%) hue-rotate(181deg) brightness(125%) contrast(150%)'
		},
		{
			name: 'Farbtest, alternative Maske',
			filter: 'invert(55%) sepia(10%) saturate(62%) hue-rotate(181deg) brightness(125%) contrast(150%)'
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
