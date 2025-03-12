import React, { useState } from 'react';
import { Navbar } from './components/layout/NavBar.tsx';
import { AuthModal } from './components/modals/AuthModal';
import Home from './components/pages/Home';

function App() {
  const [showModal, setShowModal] = useState<string | null>(null);

  const closeModal = () => setShowModal(null);
  const handleOpenLogin = () => setShowModal('login');
  const handleSwitchForm = (form: string) => setShowModal(form);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onOpenLogin={handleOpenLogin} />
      <AuthModal showModal={showModal} onClose={closeModal} onSwitchForm={handleSwitchForm} />
      
      {/* 📌 Home */}
      <Home />
    </div>
  );
}

export default App;
