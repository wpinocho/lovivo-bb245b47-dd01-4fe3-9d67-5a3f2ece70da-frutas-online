import React, { useState } from 'react';
import { Product } from '../types/product';
import { useCart } from '../contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Plus, Minus } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    console.log('Adding product to cart:', product.name, 'quantity:', quantity);
    addToCart(product, quantity);
    setQuantity(1);
  };

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity(prev => Math.max(1, prev - 1));
  };

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="p-0">
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          {!product.inStock && (
            <Badge variant="destructive" className="absolute top-2 right-2">
              Agotado
            </Badge>
          )}
          <Badge variant="secondary" className="absolute top-2 left-2">
            {product.category}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="flex-grow p-4">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-green-600">
            €{product.price.toFixed(2)}
          </span>
          <span className="text-sm text-muted-foreground">
            por {product.unit}
          </span>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        {product.inStock ? (
          <div className="w-full space-y-3">
            <div className="flex items-center justify-center space-x-3">
              <Button
                variant="outline"
                size="sm"
                onClick={decrementQuantity}
                disabled={quantity <= 1}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="font-medium min-w-[2rem] text-center">
                {quantity}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={incrementQuantity}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <Button
              onClick={handleAddToCart}
              className="w-full"
              size="sm"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Agregar al carrito
            </Button>
          </div>
        ) : (
          <Button disabled className="w-full" size="sm">
            No disponible
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProductCard;