export const recipeInitialState = [
  {
    id: 'recipe-1',
    name: 'Crispy Chicken Thigh',
    ingredients: [
      {
        id: 'ingredient-1',
        name: 'Chicken Thigh',
        quantity: 1,
        unit: 'lb',
        substitutions: [
          {
            id: 'ingredient-6',
            name: 'Chicken Leg',
            quantity: 1,
            unit: 'lb',
          },
          {
            id: 'ingredient-7',
            name: 'Tofu',
            quantity: 1,
            unit: 'lb',
          },
        ],
      },
      {
        id: 'ingredient-2',
        name: 'Short Grain White Rice',
        quantity: 1,
        unit: 'cup',
        substitutions: [
          {
            id: 'ingredient-8',
            name: 'Brown Rice',
            quantity: 1,
            unit: 'lb',
          },
          {
            id: 'ingredient-9',
            name: 'Basmati',
            quantity: 1,
            unit: 'lb',
          },
        ],
      },
      {
        id: 'ingredient-3',
        name: 'Broccoli',
        quantity: 3,
        unit: 'cup',
      },
      {
        id: 'ingredient-4',
        name: 'Garlic',
        quantity: 3,
        unit: 'clove',
      },
      {
        id: 'ingredient-5',
        name: 'Cauliflower',
        quantity: 2,
        unit: 'cup',
      },
    ],
  },
  {
    id: 'recipe-2',
    name: 'Crispy Chicken Thigh # 2',
    ingredients: [
      {
        id: 'ingredient-1',
        name: 'Chicken Thigh',
        quantity: 1,
        unit: 'lb',
        substitutions: [
          {
            id: 'ingredient-6',
            name: 'Chicken Leg',
            quantity: 1,
            unit: 'lb',
          },
          {
            id: 'ingredient-7',
            name: 'Tofu',
            quantity: 1,
            unit: 'lb',
          },
        ],
      },
      {
        id: 'ingredient-2',
        name: 'Short Grain White Rice',
        quantity: 1,
        unit: 'cup',
        substitutions: [
          {
            id: 'ingredient-8',
            name: 'Brown Rice',
            quantity: 1,
            unit: 'lb',
          },
          {
            id: 'ingredient-9',
            name: 'Basmati',
            quantity: 1,
            unit: 'lb',
          },
        ],
      },
      {
        id: 'ingredient-3',
        name: 'Broccoli',
        quantity: 3,
        unit: 'cup',
      },
      {
        id: 'ingredient-4',
        name: 'Garlic',
        quantity: 3,
        unit: 'clove',
      },
      {
        id: 'ingredient-5',
        name: 'Cauliflower',
        quantity: 2,
        unit: 'cup',
      },
    ],
  },
];

export const mockedStores = [
  {
    id: 'store-1',
    name: 'Wholefoods Columbus Circle',
    etaMin: 15,
    etaMax: 45,
    ingredients: {
      'ingredient-1': { price: 3.4 },
      'ingredient-2': { price: 1.99 },
      'ingredient-3': { price: 3.5 },
      'ingredient-4': { price: 3.1 },
      'ingredient-5': { price: 1 },
      'ingredient-6': { price: 3.5 },
      'ingredient-7': { price: 6 },
      'ingredient-8': { price: 1 },
      'ingredient-9': { price: 3 },
    },
  },
  {
    id: 'store-2',
    name: 'Fairway UWS',
    etaMin: 10,
    etaMax: 35,
    ingredients: {
      'ingredient-1': { price: 3 },
      'ingredient-2': { price: 3.99 },
      'ingredient-3': { price: 1.5 },
      'ingredient-4': { price: 3.19 },
      'ingredient-5': { price: 1.21 },
      'ingredient-6': { price: 3.51 },
      'ingredient-7': { price: 6.95 },
      'ingredient-8': { price: 1.8 },
      'ingredient-9': { price: 3.5 },
    },
  },
];
