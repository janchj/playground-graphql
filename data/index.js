module.exports = {
  beerStyles:
    [
      {
        id: '1',
        name: 'American Amber Ale'
      },
      {
        id: '2',
        name: 'American Barleywine'
      },
      {
        id: '3',
        name: 'American Brown Ale'
      },
      {
        id: '4',
        name: 'American IPA'
      },
      {
        id: '5',
        name: 'American Pale Ale'
      }
    ],
  yeasts: [
    {
      id: '1',
      name: 'Abbaye',
      type: 'dry'
    },
    {
      id: '2',
      name: 'Abbey Ale Yeast',
      type: 'liquid'
    },
    {
      id: '3',
      name: 'Abbey IV Ale Yeast',
      type: 'liquid'
    },
    {
      id: '4',
      name: 'Amalgamation - Brett Super Blend',
      type: 'liquid'
    },
    {
      id: '5',
      name: 'American Ale',
      type: 'liquid'
    }
  ],
  hops: [
    {
      id: 1,
      name: 'Admiral (UK)'
    },
    {
      id: 2,
      name: 'Ahtanum (US)'
    },
    {
      id: 3,
      name: 'Amarillo (US)'
    }
  ],
  recipes: [
    {
      id: 1,
      name: 'IPA',
      hops: [{
        id: 1,
        name: 'Admiral (UK)'
      }]
    }
  ]
};
