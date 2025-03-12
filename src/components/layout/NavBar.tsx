import React, { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';

interface NavbarProps {
onOpenLogin: () => void;
}

export function Navbar({ onOpenLogin }: NavbarProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
    <nav className="bg-white shadow-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
        <div className="flex items-center">
            <span className="text-2xl font-bold">
            <span className="text-gray-900">Tix</span>
            <span className="text-orange-500">Up</span>
            </span>
        </div>
        
        <div className="hidden md:block flex-1 max-w-2xl mx-8">
            <div className="relative">
            <input
                type="text"
                placeholder="Pesquise por eventos ou localização"
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
            </div>
            </div>
        </div>

        <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-700 hover:text-gray-900">Parceiros</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Eventos</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Central de Ajuda</a>
            <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300">
            Contato
            </button>
            <button 
            onClick={onOpenLogin} 
            className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
            >
            Login
            </button>
        </div>

        <div className="md:hidden flex items-center">
            <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-500 hover:text-gray-600"
            >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
        </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
        <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
            <div className="mb-4">
                <div className="relative">
                <input
                    type="text"
                    placeholder="Pesquise por eventos ou localização"
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                </div>
                </div>
            </div>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                Parceiros
            </a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                Eventos
            </a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                Central de Ajuda
            </a>
            <button className="w-full mt-2 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300">
                Contato
            </button>
            <button 
                onClick={onOpenLogin}
                className="w-full mt-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
            >
                Login
            </button>
            </div>
        </div>
        )}
    </div>
    </nav>
);
}
