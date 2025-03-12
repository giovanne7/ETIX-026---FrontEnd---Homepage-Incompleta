import React, { useState } from 'react';
import { Mail, Lock, User } from 'lucide-react';
import { isValidEmail } from '../../utils/validation';

interface RegisterFormProps {
  onSwitchForm: (form: string) => void;
}

export function RegisterForm({ onSwitchForm }: RegisterFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const isFormValid = name.length >= 3 && isValidEmail(email) && password.length >= 6;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Register:', { name, email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome completo</label>
        <div className="mt-1 relative">
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`w-full pl-10 pr-4 py-2 rounded-lg border ${
              name && name.length < 3
                ? 'border-red-300 focus:ring-red-500'
                : 'border-gray-300 focus:ring-orange-500'
            } focus:outline-none focus:ring-2 focus:border-transparent`}
            placeholder="Seu nome"
          />
          <User className={`h-5 w-5 absolute left-3 top-2.5 ${
            name && name.length < 3 ? 'text-red-400' : 'text-gray-400'
          }`} />
        </div>
        {name && name.length < 3 && (
          <p className="mt-1 text-sm text-red-600">O nome deve ter pelo menos 3 caracteres</p>
        )}
      </div>
      <div>
        <label htmlFor="register-email" className="block text-sm font-medium text-gray-700">Email</label>
        <div className="mt-1 relative">
          <input
            type="email"
            id="register-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full pl-10 pr-4 py-2 rounded-lg border ${
              email && !isValidEmail(email)
                ? 'border-red-300 focus:ring-red-500'
                : 'border-gray-300 focus:ring-orange-500'
            } focus:outline-none focus:ring-2 focus:border-transparent`}
            placeholder="seu@email.com"
          />
          <Mail className={`h-5 w-5 absolute left-3 top-2.5 ${
            email && !isValidEmail(email) ? 'text-red-400' : 'text-gray-400'
          }`} />
        </div>
        {email && !isValidEmail(email) && (
          <p className="mt-1 text-sm text-red-600">Por favor, insira um email válido</p>
        )}
      </div>
      <div>
        <label htmlFor="register-password" className="block text-sm font-medium text-gray-700">Senha</label>
        <div className="mt-1 relative">
          <input
            type="password"
            id="register-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            maxLength={14}
            className={`w-full pl-10 pr-4 py-2 rounded-lg border ${
              password && password.length < 6
                ? 'border-red-300 focus:ring-red-500'
                : 'border-gray-300 focus:ring-orange-500'
            } focus:outline-none focus:ring-2 focus:border-transparent`}
            placeholder="••••••••"
          />
          <Lock className={`h-5 w-5 absolute left-3 top-2.5 ${
            password && password.length < 6 ? 'text-red-400' : 'text-gray-400'
          }`} />
        </div>
        {password && password.length < 6 && (
          <p className="mt-1 text-sm text-red-600">A senha deve ter pelo menos 6 caracteres</p>
        )}
      </div>
      <button
        type="submit"
        disabled={!isFormValid}
        className={`w-full py-2 rounded-lg ${
          isFormValid
            ? 'bg-orange-500 hover:bg-orange-600 text-white'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        Criar conta
      </button>
      <div className="text-center">
        <button
          type="button"
          onClick={() => onSwitchForm('login')}
          className="text-orange-500 hover:text-orange-600 text-sm"
        >
          Já tenho uma conta
        </button>
      </div>
    </form>
  );
}
