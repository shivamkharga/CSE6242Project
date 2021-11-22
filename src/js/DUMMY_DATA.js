export const data = [
  [
    {
      user_id: 424680,
      CF_recs: [
        { rec1: 50506, CBF_rec: [127031, 77707, 99340, 61067, 86837] },
        { rec2: 109276, CBF_rec: [142969, 148661, 122144, 120138, 141086] },
        { rec3: 173430, CBF_rec: [207020, 190149, 229301, 225717, 174129] },
        { rec4: 161087, CBF_rec: [227158, 206801, 121212, 131313, 141414] },
        { rec5: 86739, CBF_rec: [115466, 115691, 117084, 121193, 122210] },
      ],
    },
    {
      user_id: 5000,
      CF_recs: [
        { rec1: 50506, CBF_rec: [127031, 77707, 99340, 61067, 86837] },
        { rec2: 109276, CBF_rec: [142969, 148661, 122144, 120138, 141086] },
        { rec3: 173430, CBF_rec: [207020, 190149, 229301, 225717, 174129] },
        { rec4: 161087, CBF_rec: [227158, 206801, 121212, 131313, 141414] },
        { rec5: 86739, CBF_rec: [115466, 115691, 117084, 121193, 122210] },
      ],
    },
  ],
]
export const RECIPE_DATA = [
  {
    id: 137739,
    recipeName: 'arriba  baked winter squash mexican style',
    cookTime: 60,
    description:
      'autumn is my favorite time of year to cook! this recipe can be prepared either spicy or sweet, your choice!two of my posted mexican-inspired seasoning mix recipes are offered as suggestions.',
    ingredients: [
      'winter squash',
      'mexican seasoning',
      'mixed spice',
      'honey',
      'butter',
      'olive oil',
      'salt',
    ],
  },
  {
    id: 45,
    recipeName: 'test recipe',
    cookTime: 45,
    description: 'So good you will smack your mama',
    ingredients: [
      'salt',
      'mexican seasoning',
      'pepper',
      'honey',
      'butter',
      'olive oil',
      'salt',
    ],
  },
  {
    id: 81,
    recipeName: 'Great Recipe',
    cookTime: 15,
    description: 'even better than the other one',
    ingredients: ['macaroni', 'rice', 'butter', 'olive oil', 'salt'],
  },
]
export const NETWORK_DATA = [
  {
    user_id: 0,
    nodes: [
      { id: 'User ID', group: 1 },
      { id: 'rec1', group: 2 },
      { id: 'rec2', group: 2 },
      { id: 'rec3', group: 2 },
      { id: 'rec4', group: 2 },
      { id: 'rec5', group: 2 },
      { id: 'rec11', group: 2 },
      { id: 'rec12', group: 2 },
      { id: 'rec13', group: 2 },
      { id: 'rec21', group: 2 },
      { id: 'rec22', group: 2 },
      { id: 'rec23', group: 2 },
      { id: 'rec31', group: 2 },
      { id: 'rec32', group: 2 },
      { id: 'rec33', group: 2 },
      { id: 'rec41', group: 2 },
      { id: 'rec42', group: 2 },
      { id: 'rec43', group: 2 },
      { id: '137739', group: 3 },
      { id: '45', group: 3 },
      { id: '81', group: 3 },
    ],
    links: [
      { source: 'User ID', target: 'rec1', value: 1 },
      { source: 'User ID', target: 'rec2', value: 1 },
      { source: 'User ID', target: 'rec3', value: 1 },
      { source: 'User ID', target: 'rec4', value: 1 },
      { source: 'User ID', target: 'rec5', value: 1 },
      { source: 'rec1', target: 'rec11', value: 2 },
      { source: 'rec1', target: 'rec12', value: 2 },
      { source: 'rec1', target: 'rec13', value: 2 },
      { source: 'rec2', target: 'rec21', value: 2 },
      { source: 'rec2', target: 'rec22', value: 2 },
      { source: 'rec2', target: 'rec23', value: 2 },
      { source: 'rec3', target: 'rec31', value: 2 },
      { source: 'rec3', target: 'rec32', value: 2 },
      { source: 'rec3', target: 'rec33', value: 2 },
      { source: 'rec4', target: 'rec41', value: 2 },
      { source: 'rec4', target: 'rec42', value: 2 },
      { source: 'rec4', target: 'rec43', value: 2 },
      { source: 'rec5', target: '137739', value: 3 },
      { source: 'rec5', target: '45', value: 3 },
      { source: 'rec5', target: '81', value: 3 },
    ],
  },
  {
    user_id: 5000,
    nodes: [
      { id: 'User ID', group: 1 },
      { id: 'rec1', group: 2 },
      { id: 'rec2', group: 2 },
      { id: 'rec3', group: 2 },
      { id: 'rec4', group: 2 },
      { id: 'rec5', group: 2 },
      { id: '45', group: 3 },
      { id: '81', group: 3 },
      { id: 'rec31', group: 2 },
      { id: 'rec41', group: 2 },
      { id: '137739', group: 2 },
    ],
    links: [
      { source: 'User ID', target: 'rec1', value: 1 },
      { source: 'User ID', target: 'rec2', value: 1 },
      { source: 'User ID', target: 'rec3', value: 1 },
      { source: 'User ID', target: 'rec4', value: 1 },
      { source: 'User ID', target: 'rec5', value: 1 },
      { source: 'rec1', target: '45', value: 3 },
      { source: 'rec2', target: '81', value: 3 },
      { source: 'rec3', target: 'rec31', value: 2 },
      { source: 'rec4', target: 'rec41', value: 2 },
      { source: 'rec5', target: '137739', value: 2 },
    ],
  },
  {
    user_id: 1000,
    nodes: [
      { id: 'User ID', group: 1 },
      { id: 'rec1', group: 2 },
      { id: 'rec2', group: 2 },
      { id: 'rec3', group: 2 },
      { id: 'rec11', group: 2 },
      { id: 'rec12', group: 2 },
      { id: 'rec13', group: 2 },
      { id: 'rec21', group: 2 },
      { id: '137739', group: 3 },
      { id: '45', group: 3 },
      { id: '81', group: 3 },
    ],
    links: [
      { source: 'User ID', target: 'rec1', value: 1 },
      { source: 'User ID', target: 'rec2', value: 1 },
      { source: 'User ID', target: 'rec3', value: 1 },
      { source: 'rec1', target: 'rec11', value: 2 },
      { source: 'rec1', target: 'rec12', value: 2 },
      { source: 'rec1', target: 'rec13', value: 2 },
      { source: 'rec2', target: 'rec21', value: 2 },
      { source: 'rec2', target: '81', value: 2 },
      { source: 'rec2', target: '45', value: 2 },
      { source: 'rec3', target: '137739', value: 2 },
    ],
  },
]
