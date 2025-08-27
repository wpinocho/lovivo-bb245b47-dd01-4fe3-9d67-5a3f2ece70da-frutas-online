import React, { useState, useMemo } from 'react';
import { products } from '../data/products';
import ProductCard from './ProductCard';
import ProductFilters from './ProductFilters';
import Header from './Header';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const FruitStore: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  console.log('FruitStore rendered with', products.length, 'products');
  console.log('Selected category:', selectedCategory);
  console.log('Search term:', searchTerm);

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(products.map(product => product.category)));
    console.log('Available categories:', uniqueCategories);
    return uniqueCategories;
  }, []);

  const filteredProducts = useMemo(() => {
    let filtered = products;

    if (selectedCategory) {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    console.log('Filtered products:', filtered.length, 'items');
    return filtered;
  }, [selectedCategory, searchTerm]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frutas Frescas Directas del Campo
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubre nuestra selección de frutas frescas y de temporada. 
            Entrega rápida y calidad garantizada.
          </p>
        </section>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Buscar frutas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:col-span-1">
            <ProductFilters
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </aside>

          {/* Products Grid */}
          <section className="lg:col-span-3">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-900">
                {selectedCategory || 'Todos los Productos'}
              </h3>
              <p className="text-muted-foreground">
                {filteredProducts.length} producto{filteredProducts.length !== 1 ? 's' : ''} encontrado{filteredProducts.length !== 1 ? 's' : ''}
              </p>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-xl text-muted-foreground">
                  No se encontraron productos
                </p>
                <p className="text-muted-foreground mt-2">
                  Intenta con otros términos de búsqueda o categorías
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">FrutaFresh</h4>
              <p className="text-gray-300">
                Tu tienda de confianza para frutas frescas y de calidad.
                Entregamos frescura directamente a tu puerta.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Sobre Nosotros</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Política de Envíos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <div className="text-gray-300 space-y-2">
                <p>📞 +34 900 123 456</p>
                <p>📧 info@frutafresh.com</p>
                <p>📍 Calle Frutal 123, Madrid</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 FrutaFresh. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FruitStore;