export default {
  name: "LSA Basis",
  imageFolder: '/assets/lsa-basis/',
  colors: [
    {
      name: 'default',
      filter: "none",
    },
    {
      name: 'green',
      filter: 'invert(52%) sepia(4%) saturate(2776%) hue-rotate(18deg) brightness(186%) contrast(130%)', // css
    },
    {
      name: 'red',
      filter: 'invert(52%) sepia(4%) saturate(2776%) hue-rotate(18deg) brightness(186%) contrast(130%)', // to be changed 
    },
    {
      name: 'blue',
      filter: 'invert(52%) sepia(4%) saturate(2776%) hue-rotate(18deg) brightness(186%) contrast(130%)', // to be changed
    },
    {
      name: 'yellow',
      filter: 'invert(52%) sepia(4%) saturate(2776%) hue-rotate(18deg) brightness(186%) contrast(130%)', // to be changed
    }
  ],
  features: [
  [
    {
      id: 'accessoires',
      title: 'Metallaccessoires',
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
      id: 'touchon',
      title: 'Touchonhalter',
      url: 'touchon-',
      format: '.png',
      options: ['', 'links', 'rechts']
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