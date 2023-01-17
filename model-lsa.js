export default {
	name: 'LSA Basis',
	imageFolder: '/assets/lsa-basis/',

	colors: [
		{
			name: 'Schwarz, Canvas oder Twill 60%CO/40%PES, 320g/m',
			filter: 'invert(40%) sepia(10%) saturate(63%) hue-rotate(9deg) brightness(100%) contrast(211%)'
		},
		{
			name: 'Dunkelstblau, Ripsmoleskin 100%CO KbA, 320g/m',
			filter: 'invert(17%) sepia(74%) saturate(1000%) hue-rotate(202deg) brightness(32%) contrast(63%)'
		},
		{
			name: 'Bordeaux, Canvas 40%CO/60%PES, 320g/m',
			filter: 'invert(56%) sepia(100%) saturate(991%) hue-rotate(312deg) brightness(51%) contrast(100%)'
		},
		{
			name: 'Karamell, Einfachpilot 100%CO, 380g/m',
			filter: 'invert(57%) sepia(100%) saturate(190%) hue-rotate(335deg) brightness(100%) contrast(200%)'
		},
		{
			name: 'Olivgrau, Mischgewebe 40%CO/60%PES, 320g/m',
			filter: 'invert(100%) sepia(10%) saturate(600%) hue-rotate(32deg) brightness(100%) contrast(80%)'
		},
		{
			name: 'Braun, Twill 60%CO/40%PES, 240g/m',
			filter: 'invert(33%) sepia(100%) saturate(63%) hue-rotate(327deg) brightness(89%) contrast(125%)'
		},
		{
			name: 'Denim, Raw Denim 100%CO KbA, 320g/m',
			filter: 'invert(60%) sepia(50%) saturate(400%) hue-rotate(178deg) brightness(35%) contrast(92%)'
		},
		{
			name: 'Sand, Canvas 60%CO/40%PES, 320g/m',
			filter: 'invert(100%) sepia(100%) saturate(700%) hue-rotate(319deg) brightness(100%) contrast(80%)'
		},
		{
			name: 'Anthrazit, Twill 60%CO/40%PES, 280g/m',
			filter: 'invert(40%) sepia(10%) saturate(62%) hue-rotate(181deg) brightness(105%) contrast(150%)'
		},
		{
			name: 'Grafit, Twill 60%CO/40%PES, 240g/m',
			filter: 'invert(55%) sepia(10%) saturate(62%) hue-rotate(181deg) brightness(125%) contrast(150%)'
		},
		{
			name: 'Blau, Twill 60%CO/40%PES, 240g/m',
			filter: 'invert(50%) sepia(100%) saturate(211%) hue-rotate(167deg) brightness(69%) contrast(196%)'
		}
	],

	features: [
		[
			{
				id: 'gurte',
				title: 'Gurtauswahl',
				url: 'gurt-',
				format: '.png',
				options: [
					'GK01 braun',
					'GK01 cognac',
					'GK01 schwarz',
					'GK02 braun',
					'GK02 cognac',
					'GK02 schwarz',
					'GL02 braun',
					'GL02 cognac',
					'GL02 schwarz',
					'GT03 grau-melange',
					'GT03 rot',
					'GT03 schwarz'
				]
			}
		],

		[
			{
				id: 'brusttasche',
				title: 'Brusttasche',
				url: 'brust-',
				format: '.png',
				options: ['', 'groß mitte', 'klein links', 'klein rechts']
			}
		],

		[
			{
				id: 'touchon_links',
				title: 'Touchonhalter links',
				url: 'touchon-links-',
				format: '.png',
				options: ['', 'Touchon']
			},
			{
				id: 'touchon_rechts',
				title: 'Touchonhalter rechts',
				url: 'touchon-rechts-',
				format: '.png',
				options: ['', 'Touchon']
			}
		],

		[
			{
				id: 'huefte_links',
				title: 'Hüftetasche links',
				url: 'huefte-links-',
				format: '.png',
				options: ['', 'klein', 'groß']
			},
			{
				id: 'huefte_rechts',
				title: 'Hüftetasche rechts',
				url: 'huefte-rechts-',
				format: '.png',
				options: ['', 'klein', 'groß']
			}
		],

		[
			{
				id: 'laenge',
				title: 'Länge',
				url: 'lsa-',
				format: '.jpg',
				options: ['lang', 'kurz']
			}
		]
	]
}
