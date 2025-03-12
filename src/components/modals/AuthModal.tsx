import React from 'react';
import { X } from 'lucide-react';
import { LoginForm } from '../forms/LoginForm';
import { RegisterForm } from '../forms/RegisterForm';
import { RecoverPasswordForm } from '../forms/RecoverPasswordForm';

interface AuthModalProps {
showModal: string | null;
onClose: () => void;
onSwitchForm: (form: string) => void;
}

export function AuthModal({ showModal, onClose, onSwitchForm }: AuthModalProps) {
if (!showModal) return null;

return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
    <div className="flex items-center justify-center min-h-screen px-4">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div className="relative bg-white rounded-lg max-w-md w-full p-6">
        <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
        >
            <X className="h-6 w-6" />
        </button>
        <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
            {showModal === 'login' && 'Login'}
            {showModal === 'register' && 'Criar conta'}
            {showModal === 'recover' && 'Recuperar senha'}
            </h2>
        </div>
        {showModal === 'login' && <LoginForm onSwitchForm={onSwitchForm} />}
        {showModal === 'register' && <RegisterForm onSwitchForm={onSwitchForm} />}
        {showModal === 'recover' && <RecoverPasswordForm onSwitchForm={onSwitchForm} />}
        </div>
    </div>
    </div>
);
}