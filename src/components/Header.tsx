import React from 'react';
import Cart from './Cart';
import { Leaf } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-green-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">FrutaFresh</h1>
              <p className="text-sm text-muted-foreground">Frutas frescas a domicilio</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">
              Inicio
            </a>
            <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">
              Productos
            </a>
            <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">
              Sobre Nosotros
            </a>
            <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">
              Contacto
            </a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Cart />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;