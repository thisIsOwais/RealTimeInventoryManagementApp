import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import ItemList from './components/ItemList';
import ItemForm from './components/ItemForm';
import { FaBox, FaChartLine, FaClipboardList } from 'react-icons/fa';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-primary-100 via-primary-50 to-secondary-50 animate-fade-in">
        <Toaster position="top-right" />
        
        <nav className="bg-white/80 backdrop-blur-sm shadow-lg sticky top-0 z-50 transition-all duration-300 ease-in-out">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <Link to="/" className="text-2xl font-bold text-primary-600 hover:text-primary-700 flex items-center gap-2 transition duration-300">
                    <FaBox className="h-6 w-6 transform group-hover:rotate-12 transition-transform duration-300" />
                    Inventory Manager
                  </Link>
                </div>
              </div>
              <div className="flex items-center space-x-4 md:space-x-6">
                <Link to="/" className="text-primary-600 hover:text-primary-800 transition duration-300 text-sm md:text-base">Dashboard</Link>
                <Link
                  to="/items/new"
                  className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 border border-transparent text-sm md:text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1"
                >
                  Add New Item
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <div className="bg-gradient-to-r from-primary-600 to-secondary-600 animate-slide-up">
          <div className="max-w-7xl mx-auto py-12 md:py-16 px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white tracking-tight">
              Manage Your Inventory
              <span className="block text-primary-200 mt-2">With Ease</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-sm md:text-base lg:text-lg text-primary-100 md:mt-5 md:max-w-3xl leading-relaxed">
              Streamline your inventory management process with our powerful and intuitive platform.
            </p>
            <div className="mt-8 md:mt-10 flex justify-center">
              <Link
                to="/items/new"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-base font-medium rounded-lg text-white hover:bg-white hover:text-primary-700 shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>

        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
                  <FaClipboardList className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-medium text-gray-900">Easy Management</h3>
                <p className="mt-2 text-base text-gray-500">Manage your inventory with just a few clicks</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
                  <FaChartLine className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-medium text-gray-900">Real-time Tracking</h3>
                <p className="mt-2 text-base text-gray-500">Monitor your inventory status in real-time</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
                  <FaBox className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-medium text-gray-900">Inventory Optimization</h3>
                <p className="mt-2 text-base text-gray-500">Optimize your inventory levels automatically</p>
              </div>
            </div>
          </div>
        </div>

        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<ItemList />} />
            <Route path="/items/new" element={<ItemForm />} />
            <Route path="/items/:id/edit" element={<ItemForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
