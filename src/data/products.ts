import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Manzanas Rojas',
    price: 3.50,
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&h=300&fit=crop',
    description: 'Manzanas rojas frescas y crujientes, perfectas para comer directamente o usar en recetas.',
    category: 'Frutas de temporada',
    inStock: true,
    unit: 'kg'
  },
  {
    id: '2',
    name: 'Plátanos',
    price: 2.20,
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop',
    description: 'Plátanos maduros y dulces, ricos en potasio y perfectos para el desayuno.',
    category: 'Frutas tropicales',
    inStock: true,
    unit: 'kg'
  },
  {
    id: '3',
    name: 'Naranjas',
    price: 2.80,
    image: 'https://images.unsplash.com/photo-1547514701-42782101795e?w=400&h=300&fit=crop',
    description: 'Naranjas jugosas llenas de vitamina C, ideales para zumos frescos.',
    category: 'Cítricos',
    inStock: true,
    unit: 'kg'
  },
  {
    id: '4',
    name: 'Fresas',
    price: 4.50,
    image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400&h=300&fit=crop',
    description: 'Fresas frescas y dulces, perfectas para postres y batidos.',
    category: 'Berries',
    inStock: true,
    unit: 'bandeja'
  },
  {
    id: '5',
    name: 'Piñas',
    price: 3.90,
    image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=400&h=300&fit=crop',
    description: 'Piñas tropicales maduras y jugosas, llenas de sabor exótico.',
    category: 'Frutas tropicales',
    inStock: true,
    unit: 'unidad'
  },
  {
    id: '6',
    name: 'Uvas Verdes',
    price: 5.20,
    image: 'https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=400&h=300&fit=crop',
    description: 'Uvas verdes sin semillas, dulces y refrescantes.',
    category: 'Frutas de temporada',
    inStock: true,
    unit: 'kg'
  },
  {
    id: '7',
    name: 'Mangos',
    price: 4.80,
    image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&h=300&fit=crop',
    description: 'Mangos tropicales maduros, cremosos y llenos de sabor.',
    category: 'Frutas tropicales',
    inStock: true,
    unit: 'unidad'
  },
  {
    id: '8',
    name: 'Kiwis',
    price: 6.30,
    image: 'https://images.unsplash.com/photo-1585059895524-72359e06133a?w=400&h=300&fit=crop',
    description: 'Kiwis frescos ricos en vitamina C y fibra, con su característico sabor agridulce.',
    category: 'Frutas exóticas',
    inStock: false,
    unit: 'kg'
  }
];