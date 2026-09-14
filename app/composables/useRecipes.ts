export interface RecipeItem {
  emoji: string
  name: string
  amount: string
  unit: string
  bg: string
}

export interface RecipeBenefit {
  icon: string
  label: string
  desc: string
  iconBg: string
}

export interface Recipe {
  id: number
  title: string
  category: string
  description: string
  ageRange: string
  minAge: number
  cookTime: string
  portion: string
  portionUnit: string
  energy: string
  energyUnit: string
  lowAllergyRisk: boolean
  items: RecipeItem[]
  steps: string[]
  benefits: RecipeBenefit[]
}

export const recipes: Recipe[] = [
  {
    id: 1,
    title: 'Banana Purée',
    category: 'BREAKFAST',
    description: 'Smooth, sweet and naturally energising.',
    ageRange: '0–3',
    minAge: 0,
    cookTime: '10 min',
    portion: '80',
    portionUnit: 'g',
    energy: '89',
    energyUnit: 'kcal',
    lowAllergyRisk: true,
    items: [
      { emoji: '🍌', name: 'Banana', amount: '80', unit: 'g', bg: '#FEF9C3' },
    ],
    steps: [
      'Peel the banana and slice into pieces.',
      'Mash thoroughly with a fork or blend until smooth.',
      'Serve immediately at room temperature.',
    ],
    benefits: [
      { icon: '⚡', label: 'Energy', desc: 'natural fuel for growing babies', iconBg: '#FEF3C7' },
      { icon: '💛', label: 'Potassium', desc: 'supports heart and muscle function', iconBg: '#FEF9C3' },
    ],
  },
  {
    id: 2,
    title: 'Rice Cereal',
    category: 'BREAKFAST',
    description: 'A gentle first food, easy on tiny tummies.',
    ageRange: '0–3',
    minAge: 0,
    cookTime: '5 min',
    portion: '60',
    portionUnit: 'g',
    energy: '70',
    energyUnit: 'kcal',
    lowAllergyRisk: true,
    items: [
      { emoji: '🌾', name: 'Rice flour', amount: '30', unit: 'g', bg: '#F5F0DC' },
      { emoji: '🥛', name: 'Breast milk', amount: '100', unit: 'ml', bg: '#F0F9FF' },
    ],
    steps: [
      'Mix rice flour with warm breast milk or formula.',
      'Stir until smooth with no lumps.',
      'Serve warm, adjust consistency as needed.',
    ],
    benefits: [
      { icon: '💪', label: 'Iron', desc: 'supports brain development', iconBg: '#D1FAE5' },
      { icon: '🌿', label: 'Easy digest', desc: "gentle on baby's tummy", iconBg: '#ECFDF5' },
    ],
  },
  {
    id: 3,
    title: 'Apple Purée',
    category: 'SNACK',
    description: 'Naturally sweet with a hint of cinnamon.',
    ageRange: '3–6',
    minAge: 3,
    cookTime: '15 min',
    portion: '100',
    portionUnit: 'g',
    energy: '52',
    energyUnit: 'kcal',
    lowAllergyRisk: true,
    items: [
      { emoji: '🍎', name: 'Apple', amount: '150', unit: 'g', bg: '#FEE2E2' },
      { emoji: '💧', name: 'Water', amount: '50', unit: 'ml', bg: '#DBEAFE' },
    ],
    steps: [
      'Peel, core and dice the apple.',
      'Simmer in water for 10 minutes until soft.',
      'Blend until completely smooth.',
      'Cool before serving.',
    ],
    benefits: [
      { icon: '🍎', label: 'Vitamin C', desc: 'boosts immunity naturally', iconBg: '#FEE2E2' },
      { icon: '🌿', label: 'Fibre', desc: 'promotes healthy digestion', iconBg: '#DCFCE7' },
    ],
  },
  {
    id: 4,
    title: 'Sweet Potato Mash',
    category: 'LUNCH',
    description: 'Creamy, vibrant and packed with vitamins.',
    ageRange: '3–6',
    minAge: 3,
    cookTime: '25 min',
    portion: '120',
    portionUnit: 'g',
    energy: '86',
    energyUnit: 'kcal',
    lowAllergyRisk: true,
    items: [
      { emoji: '🍠', name: 'Sweet potato', amount: '150', unit: 'g', bg: '#FED7AA' },
      { emoji: '🧈', name: 'Butter', amount: '5', unit: 'g', bg: '#FEF9C3' },
    ],
    steps: [
      'Peel and cube the sweet potato.',
      'Steam or boil until completely tender, about 20 minutes.',
      'Mash with a little butter until smooth.',
      'Let cool slightly before serving.',
    ],
    benefits: [
      { icon: '🌟', label: 'Vitamin A', desc: 'essential for eye development', iconBg: '#FED7AA' },
      { icon: '💪', label: 'Potassium', desc: 'supports muscle development', iconBg: '#FEF3C7' },
    ],
  },
  {
    id: 5,
    title: 'Pea Purée',
    category: 'LUNCH',
    description: 'Bright green and full of plant-based goodness.',
    ageRange: '3–6',
    minAge: 3,
    cookTime: '10 min',
    portion: '90',
    portionUnit: 'g',
    energy: '62',
    energyUnit: 'kcal',
    lowAllergyRisk: true,
    items: [
      { emoji: '🫛', name: 'Peas', amount: '100', unit: 'g', bg: '#DCFCE7' },
      { emoji: '💧', name: 'Water', amount: '30', unit: 'ml', bg: '#DBEAFE' },
    ],
    steps: [
      'Cook peas in boiling water for 3–4 minutes.',
      'Drain and immediately cool under cold water.',
      'Blend with a little cooking water until silky smooth.',
      'Pass through a sieve for extra smoothness.',
    ],
    benefits: [
      { icon: '💚', label: 'Protein', desc: 'healthy muscle growth', iconBg: '#DCFCE7' },
      { icon: '🌿', label: 'Iron', desc: 'supports brain development', iconBg: '#D1FAE5' },
    ],
  },
  {
    id: 6,
    title: 'Avocado Smash',
    category: 'LUNCH',
    description: 'Creamy healthy fats for brilliant brain growth.',
    ageRange: '6–9',
    minAge: 6,
    cookTime: '5 min',
    portion: '80',
    portionUnit: 'g',
    energy: '160',
    energyUnit: 'kcal',
    lowAllergyRisk: true,
    items: [
      { emoji: '🥑', name: 'Avocado', amount: '80', unit: 'g', bg: '#DCFCE7' },
      { emoji: '🍋', name: 'Lemon juice', amount: '5', unit: 'ml', bg: '#FEF9C3' },
    ],
    steps: [
      'Halve the avocado and remove the stone.',
      'Scoop out the flesh into a bowl.',
      'Mash with a fork until smooth.',
      'Add a squeeze of lemon to prevent browning.',
    ],
    benefits: [
      { icon: '🧠', label: 'Healthy fats', desc: 'essential for brain development', iconBg: '#DCFCE7' },
      { icon: '🌿', label: 'Folate', desc: 'supports healthy cell growth', iconBg: '#D1FAE5' },
    ],
  },
  {
    id: 7,
    title: 'Rabbit & Veggie Soup',
    category: 'LUNCH',
    description: 'Gentle, iron-rich, easy to digest.',
    ageRange: '6–9',
    minAge: 6,
    cookTime: '30 min',
    portion: '100',
    portionUnit: 'g',
    energy: '200',
    energyUnit: 'kcal',
    lowAllergyRisk: true,
    items: [
      { emoji: '🐰', name: 'Rabbit', amount: '50', unit: 'g', bg: '#FCE7F3' },
      { emoji: '🥔', name: 'Potato', amount: '40', unit: 'g', bg: '#FEF9C3' },
      { emoji: '🥕', name: 'Carrot', amount: '20', unit: 'g', bg: '#FED7AA' },
      { emoji: '🧅', name: 'Onion', amount: '10', unit: 'g', bg: '#DCFCE7' },
    ],
    steps: [
      'Boil rabbit meat until fully cooked through.',
      'Add chopped vegetables to the pot.',
      'Simmer until soft, about 15 minutes.',
      'Blend to a smooth, age-appropriate consistency.',
    ],
    benefits: [
      { icon: '💪', label: 'Iron', desc: 'supports brain development', iconBg: '#D1FAE5' },
      { icon: '🍗', label: 'Protein', desc: 'healthy muscle growth', iconBg: '#FCE7F3' },
      { icon: '🌿', label: 'Easy', desc: "gentle on baby's tummy", iconBg: '#DBEAFE' },
    ],
  },
  {
    id: 8,
    title: 'Lentil Soup',
    category: 'DINNER',
    description: 'Hearty, protein-packed and wonderfully warming.',
    ageRange: '6–9',
    minAge: 6,
    cookTime: '25 min',
    portion: '120',
    portionUnit: 'g',
    energy: '116',
    energyUnit: 'kcal',
    lowAllergyRisk: true,
    items: [
      { emoji: '🫘', name: 'Red lentils', amount: '60', unit: 'g', bg: '#FED7AA' },
      { emoji: '🍅', name: 'Tomato', amount: '30', unit: 'g', bg: '#FEE2E2' },
      { emoji: '🧅', name: 'Onion', amount: '20', unit: 'g', bg: '#DCFCE7' },
    ],
    steps: [
      'Rinse lentils thoroughly under cold water.',
      'Sauté onion until softened.',
      'Add lentils and tomato with 300 ml water.',
      'Simmer 20 minutes then blend until smooth.',
    ],
    benefits: [
      { icon: '💚', label: 'Protein', desc: 'healthy muscle growth', iconBg: '#DCFCE7' },
      { icon: '💪', label: 'Iron', desc: 'supports brain development', iconBg: '#D1FAE5' },
    ],
  },
  {
    id: 9,
    title: 'Carrot Sticks',
    category: 'SNACK',
    description: 'Crunchy finger food to practise self-feeding.',
    ageRange: '9–12',
    minAge: 9,
    cookTime: '12 min',
    portion: '60',
    portionUnit: 'g',
    energy: '35',
    energyUnit: 'kcal',
    lowAllergyRisk: true,
    items: [
      { emoji: '🥕', name: 'Carrot', amount: '80', unit: 'g', bg: '#FED7AA' },
      { emoji: '💧', name: 'Water', amount: '500', unit: 'ml', bg: '#DBEAFE' },
    ],
    steps: [
      'Peel and cut carrots into thick sticks.',
      'Steam for 10–12 minutes until just tender.',
      'Cool to room temperature before serving.',
    ],
    benefits: [
      { icon: '👁️', label: 'Vitamin A', desc: 'essential for eye development', iconBg: '#FED7AA' },
      { icon: '🌿', label: 'Fibre', desc: 'promotes healthy digestion', iconBg: '#DCFCE7' },
    ],
  },
  {
    id: 10,
    title: 'Mini Pasta',
    category: 'LUNCH',
    description: 'Tiny shapes with a vegetable-rich tomato sauce.',
    ageRange: '9–12',
    minAge: 9,
    cookTime: '20 min',
    portion: '130',
    portionUnit: 'g',
    energy: '180',
    energyUnit: 'kcal',
    lowAllergyRisk: false,
    items: [
      { emoji: '🍝', name: 'Mini pasta', amount: '50', unit: 'g', bg: '#FEF9C3' },
      { emoji: '🍅', name: 'Tomato sauce', amount: '60', unit: 'g', bg: '#FEE2E2' },
      { emoji: '🥕', name: 'Carrot', amount: '20', unit: 'g', bg: '#FED7AA' },
    ],
    steps: [
      'Cook pasta according to pack instructions.',
      'Simmer carrots in tomato sauce until soft.',
      'Blend sauce briefly for a smooth texture.',
      'Combine pasta and sauce, serve warm.',
    ],
    benefits: [
      { icon: '⚡', label: 'Carbs', desc: 'sustained energy for play', iconBg: '#FEF9C3' },
      { icon: '🍅', label: 'Lycopene', desc: 'antioxidant from tomatoes', iconBg: '#FEE2E2' },
    ],
  },
  {
    id: 11,
    title: 'Egg Scramble',
    category: 'BREAKFAST',
    description: 'Soft, fluffy and rich in essential proteins.',
    ageRange: '9–12',
    minAge: 9,
    cookTime: '8 min',
    portion: '70',
    portionUnit: 'g',
    energy: '148',
    energyUnit: 'kcal',
    lowAllergyRisk: false,
    items: [
      { emoji: '🥚', name: 'Egg', amount: '2', unit: 'pcs', bg: '#FEF9C3' },
      { emoji: '🧈', name: 'Butter', amount: '5', unit: 'g', bg: '#FEF3C7' },
    ],
    steps: [
      'Crack eggs into a bowl and whisk well.',
      'Melt butter in a non-stick pan over low heat.',
      'Pour in eggs and stir gently until just set.',
      'Serve immediately, mash slightly if needed.',
    ],
    benefits: [
      { icon: '🥚', label: 'Protein', desc: 'healthy muscle growth', iconBg: '#FEF9C3' },
      { icon: '🌟', label: 'Choline', desc: 'supports brain health', iconBg: '#FEF3C7' },
    ],
  },
  {
    id: 12,
    title: 'Chicken Stew',
    category: 'DINNER',
    description: 'Hearty family flavours in every tiny bite.',
    ageRange: '1 year+',
    minAge: 12,
    cookTime: '35 min',
    portion: '150',
    portionUnit: 'g',
    energy: '210',
    energyUnit: 'kcal',
    lowAllergyRisk: true,
    items: [
      { emoji: '🍗', name: 'Chicken', amount: '80', unit: 'g', bg: '#FED7AA' },
      { emoji: '🥕', name: 'Carrot', amount: '30', unit: 'g', bg: '#FED7AA' },
      { emoji: '🥔', name: 'Potato', amount: '40', unit: 'g', bg: '#FEF9C3' },
    ],
    steps: [
      'Dice chicken into small pieces.',
      'Sauté until golden brown all over.',
      'Add vegetables and cover with water.',
      'Simmer 25 minutes, season lightly and serve.',
    ],
    benefits: [
      { icon: '💪', label: 'Protein', desc: 'healthy muscle growth', iconBg: '#FED7AA' },
      { icon: '🦴', label: 'Zinc', desc: 'supports immune system', iconBg: '#DBEAFE' },
    ],
  },
  {
    id: 13,
    title: 'Berry Smoothie',
    category: 'SNACK',
    description: 'Vibrant and packed with antioxidants.',
    ageRange: '1 year+',
    minAge: 12,
    cookTime: '5 min',
    portion: '150',
    portionUnit: 'ml',
    energy: '95',
    energyUnit: 'kcal',
    lowAllergyRisk: true,
    items: [
      { emoji: '🫐', name: 'Blueberries', amount: '60', unit: 'g', bg: '#EDE9FE' },
      { emoji: '🍓', name: 'Strawberries', amount: '50', unit: 'g', bg: '#FEE2E2' },
      { emoji: '🥛', name: 'Whole milk', amount: '100', unit: 'ml', bg: '#F0F9FF' },
    ],
    steps: [
      'Wash all fruit thoroughly.',
      'Combine fruit and milk in a blender.',
      'Blend until completely smooth.',
      'Serve in a cup with a straw.',
    ],
    benefits: [
      { icon: '🫐', label: 'Antioxidants', desc: 'protect cells from damage', iconBg: '#EDE9FE' },
      { icon: '🦷', label: 'Calcium', desc: 'builds strong bones and teeth', iconBg: '#F0F9FF' },
    ],
  },
  {
    id: 14,
    title: 'Oat Porridge',
    category: 'BREAKFAST',
    description: 'Warming, filling and perfect for active toddlers.',
    ageRange: '1 year+',
    minAge: 12,
    cookTime: '10 min',
    portion: '120',
    portionUnit: 'g',
    energy: '130',
    energyUnit: 'kcal',
    lowAllergyRisk: false,
    items: [
      { emoji: '🌾', name: 'Rolled oats', amount: '40', unit: 'g', bg: '#F5F0DC' },
      { emoji: '🥛', name: 'Whole milk', amount: '120', unit: 'ml', bg: '#F0F9FF' },
      { emoji: '🍯', name: 'Honey', amount: '5', unit: 'g', bg: '#FEF9C3' },
    ],
    steps: [
      'Combine oats and milk in a saucepan.',
      'Cook over medium heat, stirring constantly.',
      'Simmer 5 minutes until thick and creamy.',
      'Drizzle with honey and serve warm.',
    ],
    benefits: [
      { icon: '⚡', label: 'Energy', desc: 'sustained release for active toddlers', iconBg: '#FEF9C3' },
      { icon: '🌿', label: 'Beta-glucan', desc: 'supports healthy cholesterol', iconBg: '#DCFCE7' },
    ],
  },
]

export function useRecipe(id: number): Recipe | null {
  return recipes.find(r => r.id === id) ?? null
}
