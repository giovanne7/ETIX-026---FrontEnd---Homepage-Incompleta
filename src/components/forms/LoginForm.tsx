import React, { useState } from 'react';
import { Mail, Lock } from 'lucide-react';
import { isValidEmail } from '../../utils/validation';

interface LoginFormProps {
  onSwitchForm: (form: string) => void;
}

export function LoginForm({ onSwitchForm }: LoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const isFormValid = isValidEmail(email) && password.length >= 6;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login:', { email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <div className="mt-1 relative">
          <input
            type="email"
            id="email"
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
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Senha</label>
        <div className="mt-1 relative">
          <input
            type="password"
            id="password"
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
        Entrar
      </button>
      <div className="flex justify-between text-sm">
        <button
          type="button"
          onClick={() => onSwitchForm('register')}
          className="text-orange-500 hover:text-orange-600"
        >
          Criar conta
        </button>
        <button
          type="button"
          onClick={() => onSwitchForm('recover')}
          className="text-orange-500 hover:text-orange-600"
        >
          Esqueci minha senha
        </button>
      </div>
    </form>
  );
}